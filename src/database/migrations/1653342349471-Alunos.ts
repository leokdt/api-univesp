import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Alunos1653342349471 implements MigrationInterface {

    // Comando para inserir uma tabela(run)
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "alunos",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "ra",
                        type: "numeric"
                    },
                    {
                        name: "id_turma",
                        type: "uuid"
                    }
                ],
            // Relacionamento entre as tabelas "turma" e "aluno"
                foreignKeys: [
                    {
                        name: "fk_id_turma",
                        columnNames: ["id_turma"],
                        referencedTableName: "turmas",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }
    
    // Comando para excluir a tabela (revert)
    public async down(queryRunner: QueryRunner): Promise<any> {
       await queryRunner.dropTable("alunos"); 
    }
}
