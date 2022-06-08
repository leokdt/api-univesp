import { Request, Response } from 'express';
import { AdicionarDisciplinaService } from '../services/AdicionarDisciplinaService';

//Arquivo de chamada do Service para adicionar uma Turma
export class AdicionarDisciplinaController {
    async handle(request: Request, response: Response) {
        const { nome } = request.body;

        const service = new AdicionarDisciplinaService();

        const result = await service.execute({ nome });

        // Verificando se resulta em erro para gerar status:400.
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        // Em caso de sucesso é gerado é exibido o resultado em json.
        return response.json(result);
    }
}