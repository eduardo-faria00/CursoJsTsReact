/*
Javascript é baseado em protótipos para passar propriedades
e métodos de um objeto para outro. Protótipo é o termo usado
para se referir ao que foi criado pela primeira vez, servindo
de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo
(__proto__) que vem da propriedade prototype da função construtora
que foi usada para cria-lo. Quando tentamos acessar um membro de 
um objeto, primeiro o motor do JS vai tentar encontrar este 
membro no próprio objeto e depois a cadeia de protótipos é
usada até o topo (null) até encontrar (ou não) tal membro.

Uma função construtora pode ser considerada um molde.
Sempre que um novo objeto é criado a partir de uma função construtora
o v8 linka o prototype da função ao __proto__ do objeto.
Pessoa.prototype === pessoa1.__proto__ (true)
*/

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto() = () => `PRIORIDADE ${this.nome} ${this.sobrenome}`
}
// adiciona métodos ao prototype da função construtora
Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`

// instancias 
const pessoa1 = new Pessoa('Eduardo', 'Faria')
const pessoa2 = new Pessoa('Esther', 'Mariana')

