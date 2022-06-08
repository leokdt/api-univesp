import { getRepository } from 'typeorm';

import { Turma } from '../entities/Turma';

export class ListarTurmasService {
    
    async execute() {
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Turma);

        const turma = await repo.find();

        //Retornando todos Departamentos cadastrados
        return turma;
    }
}