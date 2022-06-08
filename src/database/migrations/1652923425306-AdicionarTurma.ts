import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AdicionarTurma1652923425306 implements MigrationInterface {

    // Comando para inserir uma tabela(run)
public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
        new Table({
            name: "turmas",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "nome",
                    type: "varchar",
                    isUnique: true
                }
            ]
       })
    )
}

// Comando para excluir a tabela (revert)
public async down(queryRunner: QueryRunner): Promise<any> {
   await queryRunner.dropTable("turmas"); 
}

}
