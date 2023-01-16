import express from 'express';
import cors from 'cors';
import { WordleController } from './controllers/WordleController';


const app: express.Application = express();

app.use(cors());
app.use('/wordle', WordleController);

app.get('/', (req, res) => {
    res.send('Hello World yes!');
});

export default app;