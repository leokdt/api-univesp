import { getRepository } from 'typeorm';

import { Turma } from '../entities/Turma';

export class ExcluirTurmaService {

    async execute(id: string) {
        // Criando a camada para comunicação com o banco de dados
        const repo = getRepository(Turma);

        //Verificando se o Departamento informado realmente existe:
        if(!(await repo.findOne(id))) {
            return new Error("Turma não encontrada.");
        }

        //Deletando Departamento pelo ID
        await repo.delete(id);

    }
}