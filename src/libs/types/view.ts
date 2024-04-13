import { ObjectId } from "mongoose";
import { viewGroup } from "../enums/view.enum";

export interface View {
  _id: ObjectId;
  viewGroup: viewGroup;
  memberId: ObjectId;
  viewRefId: ObjectId;
  createdAt: Date;
  updateAt: Date;
}

export interface ViewInput {
  memberId: ObjectId;
  viewRefId: ObjectId;
  viewGroup: viewGroup;
}
