import { Request, Response } from 'express';

export class HelloWorldController {
    public helloWorld(req: Request, res: Response) {
        res.json({ message: 'Hello, world!' });
    }
}