import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Error";

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

restaurantController.proccessSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("proccessSignup");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.proccessSignup(newMember);
    // session
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (error) {
    console.log("Error, proccessSignup", error);
    res.send(error);
  }
};

restaurantController.proccessLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("proccessLogin");

    const input: LoginInput = req.body;
    const result = await memberService.proccessLogin(input);
    // session
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, proccessLogin", err);
    res.send(err);
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session?.member)
      res.send(`<script>alert("${req.session.member.memberNick}")</script>`);
    else res.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`);
  } catch (err) {
    console.log("Error, checkAuthSession", err);
    res.send(err);
  }
};

export default restaurantController;
