/*
Sempre que um objeto é criado de forma literal, o V8 faz automaticamente
a chamada da função construtora Object. Para definir que o __proto__ de
um objeto seja outro objeto existe a função setPrototypeOf(objetoA, objetoB).
Nesse caso, o proto de B será o objeto A. Quando o __proto__ de um 
objeto é atribuido para outro, as propriedades de um podem ser acessadas
pelo outro.
*/
const pessoa1 = {
    nome1: 'Esther',
    sobrenome1: 'Mariana'
}

const pessoa2 = {
    nome2: 'Eduardo',
    sobrenome2: 'Faria'
}

//__proto__ de pessoa1 agora é pessoa2
Object.setPrototypeOf(pessoa1, pessoa2)
console.log(pessoa1.nome2)

//============================================================================
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}
Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
Pessoa.prototype.saudacao = () => `${this.nome} ${this.sobrenome} está falando oi`
