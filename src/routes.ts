import { AdicionarDisciplinaController } from './controllers/AdicionarDisciplinaController';
import { ListarAlunosController } from './controllers/ListarAlunosController';
import { ListarTurmasController } from './controllers/ListarTurmasController';
import { AdicionarAlunoController } from './controllers/AdicionarAlunoController';
import { AdicionarTurmaController } from './controllers/AdicionarTurmaController';
import { Router } from "express";

const routes = Router();
const axios = require('axios');

// Criar Turma - POST
routes.post("/turmas/add-turma", new AdicionarTurmaController().handle);

// Listar Turmas - GET
routes.get("/turmas", new ListarTurmasController().handle);

// Listar Turma Específica - GET
routes.get("/turmas/ind/", ( (req, res) => res.send( req.query.nome ) ) );

/* Listar Nomes das Turmas - GET
routes.get("/turmas/nomes/", ( (req, res) => {
    axios.get('localhost:3000/turmas')
    .then(result => res.send(result.data.nome))
    .catch(error => console.log(error))
} ) );*/

// Excluir Turma
//routes.delete("/disciplinas/excluir-disciplina/:id", new ExcluirDisciplinaController().handle);

// Excluir Disciplina
//routes.delete("/disciplinas/excluir-disciplina/:id", new ExcluirDisciplinaController().handle);

// Atualizar/Editar Disciplina
//routes.put("/disciplina/editar-disciplina/:id", new EditarDisciplinaController().handle);

// Listar Departamento Específico - GET{id}
//routes.get("/departments/:id", new GetDepartmentController().handle);

// Adicionar Disciplina
routes.post("/disciplinas/add-disciplina", new AdicionarDisciplinaController().handle);

//-------------------------------------------------------------------------------//

// Adicionar Aluno
routes.post("/alunos/add-aluno", new AdicionarAlunoController().handle);

//Listar Alunos 
routes.get("/listar-alunos", new ListarAlunosController().handle);

// Listar Nome Alunos - GET
//routes.get("/listar-alunos-nome/", ( (req, res) => res.send( req.query.nome ) ) );

//Excluir Livro
//routes.delete("/livros/excluir-livro/:id", new ExcluirLivroController().handle);

// Atualizar dados do Funcionario
//routes.put("/livros/:id", new EditarLivroController().handle);

export { routes };