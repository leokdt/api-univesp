import { Request, Response } from "express";

import { ListarAlunosService } from "../services/ListarAlunosService";

//Arquivo de chamada do Service para listar todos os Alunos
export class ListarAlunosController {
    
    async handle(request: Request, response: Response) {
        const service = new ListarAlunosService();

        const alunos = await service.execute();

        // Retorna todos os Alunos
        return response.json(alunos);//.send(request.query.nome)
    }
}