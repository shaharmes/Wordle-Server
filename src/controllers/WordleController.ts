import { WordleService } from "../services/WordleService";
import { Request, Response } from "express";


class WordleController {

    private WordleService: WordleService;

    constructor() {
        this.WordleService = new WordleService();
    }

    async checkWinCondition(req: Request, res: Response) {
        const currWord = req.body.currWord;
        const word = req.body.word;
        const pointer = req.body.pointer;
        const result =  this.WordleService.checkWin(currWord, word, pointer);
        res.send(result);
    }

}

export { WordleController };
