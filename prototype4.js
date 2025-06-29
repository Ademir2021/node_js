const Pessoa = {
    nome: '',
    idade: 0,
    sexo: '',
    falar() {
        falar = "Pessoa falando"
        return falar
    },
    logar() {
        // const idade = 2
        if (this.idade > 17) {
            return "Logado com sucesso"
        } else {
            return "Login não permitido para menor de 18"
        }
    }
}
const pessoa = Object.create(Pessoa)
pessoa.nome = "José de Lima"
pessoa.idade = 18
pessoa.sexo = "M"
// pessoa.falar = "Falando dinovo"
const logar = pessoa.logar()
// console.log(logar)
console.log(pessoa)