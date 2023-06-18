function SalaAula(alunos){
    this.alunos = alunos || []
}

SalaAula.prototype = {
    adicionarAluno: function(aluno){
        this.alunos.push(aluno)
    },
    mostrarAlunos: function(){
        return this.alunos
    }
}

function NovaSala(){
    SalaAula.call(this)
}

NovaSala.prototype = Object.create(SalaAula.prototype)

const novaSala = new NovaSala()
novaSala.adicionarAluno("Pedro")
novaSala.adicionarAluno('João')

console.log(novaSala.mostrarAlunos())