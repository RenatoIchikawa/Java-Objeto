import User from "./user.js";

class Admin extends User {
    constructor(nome, email, nascimento, role="Admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomdeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin('Wolace', 'wolace@banana', '2021-07-09' )

console.log(novoAdmin)
console.log(novoAdmin.exibirInfos())