import { WordleController } from "../controllers/WordleController";
import { Router, Request, Response } from "express";
import bodyParser from 'body-parser';


export const WordleRoute: Router = Router();

const controller = new WordleController();

WordleRoute.post("/win", bodyParser.json(), (req: Request, res: Response) => {
    controller.checkWinCondition(req, res);
    
});

WordleRoute.post("/color", bodyParser.json(), (req: Request, res: Response) => {
    controller.setColors(req, res);
});