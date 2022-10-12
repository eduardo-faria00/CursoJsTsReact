// o symbol pode ser criado para definir uma propriedade privada na classe
// o symbol é sempre diferente cada vez que a função é executada
// Symbol('descrição')
const _velocidade = Symbol('velocidade')

class Carro {
  constructor(nome) {
    this.nome = nome
    this[_velocidade] = 0
  }
  // será executado quando for feito um set do valor dessa propriedade
  set velocidade(valor) {
    if (typeof valor != 'number') return
    if (valor >= 100 || valor <= 0) return
    this[_velocidade] = valor
  }
  // será executado quando for feito um get desse valor
  get velocidade() {
    return this[_velocidade]
  }

  acelerar() {
    if (this[_velocidade] >= 100) return
    this[_velocidade]++
  }

  freiar() {
    if (this[_velocidade] <= 0) return
    this[_velocidade]--
  }
}

const c1 = new Carro('fusca')
c1.velocidade = 99 // está dentro da faixa de valores aceitos, então aceita

//==========================================================================
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
  // setando o nome completo já seta nome e sobrenome
  set nomeCompleto(valor) {
    [this.nome, this.sobrenome] = valor.split(' ')
  }
}

const p1 = new Pessoa()
p1.nomeCompleto = 'Eduardo Faria'
