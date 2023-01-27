import { WordleService } from "../services/WordleService";
import { Request, Response } from "express";


class WordleController {

    private WordleService: WordleService;

    constructor() {
        this.WordleService = new WordleService();
    }

    async checkWinCondition(req: Request, res: Response) {
        const currWord = req.body.currWord;
        const pointer = req.body.pointer;
        const result =  this.WordleService.checkWin(currWord, pointer);
        res.send(result);
    }

    async setColors(req: Request, res: Response) {
        const wordColoring = req.body.wordColoring;
        const newBoardColor = req.body.newBoardColor;
        const row = req.body.row;
        const data = this.WordleService.setColors(wordColoring, newBoardColor, row);
        res.send(data);
    }


}

export { WordleController };
