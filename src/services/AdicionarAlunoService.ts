import { getRepository } from 'typeorm';

import { Aluno } from '../entities/Aluno';
import { Turma } from './../entities/Turma';

// Tipagem do formato para acrescentar um livro
type AlunoRequest = {
    nome: string;
    ra: number;
    id_turma: string;
}

export class AdicionarAlunoService {
    
    async execute({nome, ra, id_turma}: AlunoRequest): Promise<Aluno | Error> {
    
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Aluno);
        const repoTurma = getRepository(Turma);
    
        //Verificando se já existe o Departamento a ser vinculado ao Funcionário
        if(!await repoTurma.findOne(id_turma)) {
            return new Error("A Turma não foi encontrada.")
        }
    
        //Criando objeto de acordo com a Request
        const aluno = repo.create({
            nome,
            ra, 
            id_turma
        });
    
        //Salvando o objeto
        await repo.save(aluno);
    
        return aluno;
    
      }
}