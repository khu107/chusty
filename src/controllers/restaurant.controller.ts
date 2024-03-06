import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home page");
  } catch (error) {
    console.log("Error, goHome", error);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login page");
  } catch (error) {
    console.log("Error, gogetLoginHome", error);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup page");
  } catch (error) {
    console.log("Error, getSignup", error);
  }
};

restaurantController.proccessLogin = async (req: Request, res: Response) => {
  try {
    console.log("proccessLogin");
    console.log("body", req.body);
    const input: LoginInput = req.body;
    const memberService = new MemberService();
    const result = await memberService.proccessLogin(input);
    res.send(result);
  } catch (err) {
    console.log("Error, proccessLogin", err);
    res.send(err);
  }
};

restaurantController.proccessSignup = async (req: Request, res: Response) => {
  try {
    console.log("proccessSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.proccessSignup(newMember);

    res.send(result);
  } catch (error) {
    console.log("Error, proccessSignup", error);
    res.send(error);
  }
};

export default restaurantController;
