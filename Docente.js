import User from "./user.js"

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudantes(estudante, curso) {
        return `estudante ${estudante} aprovado no curso ${curso}.`
    }
}

const novoDcoente = new Docente('Mariana', 'mari@bla', '2021-09-12')
console.log(novoDcoente)
console.log(novoDcoente.exibirInfos())
console.log(novoDcoente.aprovaEstudantes('Juliana', 'JS'))