import { Router } from "express";
import homeController from "../controllers/homeController";
import chartController from "../controllers/chartController";

const route = new Router();

route.get("/", homeController.index);
route.get("/klines", chartController.index);

export default route;
