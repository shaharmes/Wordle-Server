import { Router } from "express";

export const WordleController: Router = Router();

WordleController.get("/", (req, res) => {
    res.send("Hello World!");
});
