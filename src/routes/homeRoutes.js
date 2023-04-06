import { Router } from "express";
import homeController from "../controllers/homeController";

const route = new Router();

route.get("/", homeController.index);

export default route;
