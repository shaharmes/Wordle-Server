import express from 'express';
import cors from 'cors';
import { WordleRoute } from './routes/WordleRoutes';


const app: express.Application = express();

app.use(cors());
app.use('/wordle', WordleRoute);

app.get('/', (req, res) => {
    res.send('Hello World yes!');
});

export default app;