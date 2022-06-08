import { Request, Response } from "express";

import { AdicionarAlunoService } from './../services/AdicionarAlunoService';

//Arquivo de chamada do Service para adicionar um Aluno
export class AdicionarAlunoController {
    async handle(request: Request, response: Response) {
        const {nome, ra, id_turma} = request.body

        const service = new AdicionarAlunoService();

        const result = await service.execute({
            nome,
            ra,
            id_turma
        });

        // Verificando se resulta em erro para gerar status:400.
        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }
        
        // Em caso de sucesso é gerado é exibido o resultado em json.
        return response.json(result);
    }
}