import express from 'express';
import bodyParser from 'body-parser';
import { HelloWorldController } from './src/controllers/HelloWorldController';

const app = express();
app.use(bodyParser.json());

const helloWorldController = new HelloWorldController();

app.post('/api/helloworld', (req, res) => helloWorldController.helloWorld(req, res));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});