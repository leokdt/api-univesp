import { AdicionarTurmaService } from './../services/AdicionarTurmaService';
import { Request, Response } from 'express';

//Arquivo de chamada do Service para adicionar uma Turma
export class AdicionarTurmaController {
    async handle(request: Request, response: Response) {
        const { nome } = request.body;

        const service = new AdicionarTurmaService();

        const result = await service.execute({ nome });

        // Verificando se resulta em erro para gerar status:400.
        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        // Em caso de sucesso é gerado é exibido o resultado em json.
        return response.json(result);
    }
}