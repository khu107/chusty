import { ObjectId } from "mongoose";
import { T } from "../libs/types/common";
import { shapeIntoMongooseObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Error";
import {
  Product,
  ProductInput,
  ProductInquery,
  ProductUpdateInput,
} from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import { ProductStatus } from "../libs/enums/product.enum";
import { ViewInput } from "../libs/types/view";
import { viewGroup } from "../libs/enums/view.enum";
import ViewService from "./View.service";

class ProductService {
  private readonly productModel;
  public viewService;
  constructor() {
    this.productModel = ProductModel;
    this.viewService = new ViewService();
  }

  /* SPA */

  public async getProducts(inquery: ProductInquery): Promise<Product[]> {
    const match: T = { productStatus: ProductStatus.PROCESS };
    if (inquery.productCollection)
      match.productCollection = inquery.productCollection;

    if (inquery.search) {
      match.productName = { $regex: new RegExp(inquery.search, "i") };
    }

    const sort: T =
      inquery.order === "productPrice"
        ? { [inquery.order]: 1 }
        : { [inquery.order]: -1 };

    const result = this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquery.page * 1 - 1) * inquery.limit },
        { $limit: inquery.limit * 1 },
      ])
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async getProduct(
    memberId: ObjectId | null,
    id: string
  ): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);
    let result = await this.productModel
      .findOne({
        _id: productId,
        productStatus: ProductStatus.PROCESS,
      })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    if (memberId) {
      const input: ViewInput = {
        memberId: memberId,
        viewRefId: productId,
        viewGroup: viewGroup.PRODUCT,
      };
      const exitsView = await this.viewService.checkViewExistence(input);
      console.log("exits:", !!exitsView);

      if (!exitsView) {
        console.log("PlANING TO INSERT NEW VIEW");
        await this.viewService.insertMemberView(input);

        result = await this.productModel
          .findByIdAndUpdate(
            productId,
            { $inc: { productViews: +1 } },
            { new: true }
          )
          .exec();
      }
    }

    return result;
  }

  /* SSR */

  public async getAllProducts(): Promise<Product[]> {
    // kirib kelayotgan stringni objectid uzgartirish kerak

    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (error) {
      console.error("Error, model: createNewProduct", error);

      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> {
    // kirib kelayotgan stringni objectid uzgartirish kerak
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
  }
}

export default ProductService;
