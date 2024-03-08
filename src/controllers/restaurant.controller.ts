import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.render("home");
  } catch (error) {
    console.log("Error, goHome", error);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.render("signup");
  } catch (error) {
    console.log("Error, getSignup", error);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.render("login");
  } catch (error) {
    console.log("Error, gogetLoginHome", error);
  }
};

restaurantController.proccessSignup = async (req: Request, res: Response) => {
  try {
    console.log("proccessSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.proccessSignup(newMember);

    res.send(result);
  } catch (error) {
    console.log("Error, proccessSignup", error);
    res.send(error);
  }
};

restaurantController.proccessLogin = async (req: Request, res: Response) => {
  try {
    console.log("proccessLogin");

    const input: LoginInput = req.body;
    const result = await memberService.proccessLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error, proccessLogin", err);
    res.send(err);
  }
};

export default restaurantController;
