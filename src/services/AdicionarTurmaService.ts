import { getRepository } from 'typeorm';

import { Turma } from '../entities/Turma';

// Tipagem do formato de criação da Turma
type TurmaRequest = {
    nome: string;
}

export class AdicionarTurmaService {

    async execute({ nome }:TurmaRequest): Promise<Turma | Error> {
        // Criando camada para comunicação com o banco de dados
        const repo = getRepository(Turma);

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