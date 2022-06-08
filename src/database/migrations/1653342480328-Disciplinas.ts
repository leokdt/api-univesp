import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Disciplinas1653342480328 implements MigrationInterface {

    // Comando para inserir uma tabela(run)
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: "disciplinas",
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
                        name: "AV1",
                        type: "numeric"
                    },
                    {
                        name: "AV2",
                        type: "numeric"
                    },
                    {
                        name: "AV3",
                        type: "numeric"
                    },
                    {
                        name: "AV4",
                        type: "numeric"
                    },
                    {
                        name: "id_aluno",
                        type: "uuid"
                    }
                ],
            // Relacionamento entre as tabelas "turma" e "aluno"
                foreignKeys: [
                    {
                        name: "fk_id_aluno",
                        columnNames: ["id_aluno"],
                        referencedTableName: "alunos",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        );
    }
    
    // Comando para excluir a tabela (revert)
    public async down(queryRunner: QueryRunner): Promise<any> {
       await queryRunner.dropTable("disciplinas"); 
    }

}
