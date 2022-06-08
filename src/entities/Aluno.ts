import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { Turma } from './Turma';

// Referenciando a tabela:
@Entity("alunos")
export class Aluno {
    
    //Referenciando as colunas:
    @PrimaryColumn()
    id: string;

    @Column()
    nome: string;

    @Column()
    ra: number;

    @Column()
    id_turma: string;

    //Referenciando o relacionamento das tabelas, onde um Departamento pode ter vários Funcionários
    @ManyToOne(() => Turma)
    //Referenciando a coluna que será unida a tabela de Funcionários
    @JoinColumn({ name: "id_turma" })
    turma: Turma;

    // Comando para geração de ID, caso não venha preenchido.
    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}