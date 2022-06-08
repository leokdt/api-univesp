import { getRepository } from 'typeorm';

import { Disciplina } from '../entities/Disciplina';

// Tipagem do formato de criação da Turma
type DisciplinaRequest = {
    nome: string;
}

export class AdicionarDisciplinaService {

    async execute({ nome }:DisciplinaRequest): Promise<Disciplina | Error> {
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Disciplina);

        //Verificando se já existe uma Turma com mesmo nome:
        if(await repo.findOne({nome})) {
            return new Error("Turma já cadastrada.");
        }

        //Criando objeto de acordo com a Request
        const turma = repo.create({
            nome
        })

        //Salvando o objeto
        await repo.save(turma);

        return turma;
    }
}