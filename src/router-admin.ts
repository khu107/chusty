import { Router } from "express";
import restaurantController from "./controllers/restaurant.controller";

const routerAdmin = Router();

/* Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.proccessLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.proccessSignup);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);
/* Product */

/* User */
export default routerAdmin;
