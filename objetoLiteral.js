const user = {
    nome: "Renato",
    email: "renato@xx",
    nascimento: "09/06/04",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "João",
    email: "joao@banana",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()