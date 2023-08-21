import express from "express";
import {join} from "../controllers/userController.js";
import {trending} from "../controllers/videoController.js";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);
globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;