import { ObjectID } from "bson";
import { Request, Response } from "express";
import { ListClientUseCase } from "./ListClientUseCase";

export class ListClientController {
    constructor(
        private ListUserUseCase: ListClientUseCase,
    ){}
    async handle(request: Request, response: Response): Promise<Response> {
        const result = await this.ListUserUseCase.execute();
            
        return response.status(200).send(result);
    }
}