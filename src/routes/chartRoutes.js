import { Router } from "express";
import chartController from "../controllers/chartController";

const route = new Router();

route.post("/", chartController.index);

export default route;
