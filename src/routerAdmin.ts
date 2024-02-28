import { Router } from "express";
import restaurantController from "./controllers/restaurant.controller";

const routerAdmin = Router();

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/login", restaurantController.getLogin);

routerAdmin.get("/signup", restaurantController.getSignup);

export default routerAdmin;
