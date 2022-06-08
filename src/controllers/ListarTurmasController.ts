import { Request, Response } from "express";

import { ListarTurmasService } from "../services/ListarTurmasService";

//Arquivo de chamada do Service para Listar todos os Departamentos
export class ListarTurmasController {
    
    async handle(request: Request, response: Response) {
        const service = new ListarTurmasService();

        const turma = await service.execute();
        
        // Retorna todos os departamentos em formato json
        return response.json(turma);
    }
}