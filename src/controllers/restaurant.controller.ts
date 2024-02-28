import { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home page");
  } catch (error) {
    console.log("Error, goHome", error);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login page");
  } catch (error) {
    console.log("Error, gogetLoginHome", error);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup page");
  } catch (error) {
    console.log("Error, getSignup", error);
  }
};

export default restaurantController;
