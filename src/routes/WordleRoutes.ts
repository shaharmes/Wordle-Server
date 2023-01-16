import { WordleController } from "../controllers/WordleController";
import { Router, Request, Response } from "express";
import bodyParser from 'body-parser';


export const WordleRoute: Router = Router();

const controller = new WordleController();

WordleRoute.post("/", bodyParser.json(), (req: Request, res: Response) => {
    controller.checkWinCondition(req, res);
});