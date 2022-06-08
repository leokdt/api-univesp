import { getRepository } from 'typeorm';

import { Aluno } from '../entities/Aluno';

export class ListarAlunosService {
    
    async execute() {
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Aluno);

        const alunos = await repo.find();

        //Retornando os Alunos cadastrados
        return alunos;

    }
}