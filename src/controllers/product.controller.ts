import { Request, Response } from "express";
import Errors from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render("products");
  } catch (error) {
    console.log("Error, getAllProducts", error);
    if (error instanceof Errors) res.status(error.code).json(error);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

productController.createNewProduct = async (req: Request, res: Response) => {
  try {
    console.log("createNewProduct");
  } catch (error) {
    console.log("Error, createNewProduct", error);
    if (error instanceof Errors) res.status(error.code).json(error);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
  } catch (error) {
    console.log("Error, updateChosenProduct", error);
    if (error instanceof Errors) res.status(error.code).json(error);
    else res.status(Errors.standart.code).json(Errors.standart);
  }
};

export default productController;
