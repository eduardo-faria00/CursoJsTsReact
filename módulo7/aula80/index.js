/*
Uma classe faz a mesma coisa que uma função construtora, apenas
a sintaxe é diferente. O método "constructor" está presente
automaticamente ao criar uma classe, e pode ou não ser usado. É
usado para adicionar paramentros à classe. Quando um método é
adicionado à uma classe, ele automaticamente vai para o prototype
da classe.
*/
class Pessoa {
  //parâmetros
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }
  //métodos
  falar() {
    console.log(`${this.nome} está falando`)
  }
  beber() {
    console.log(`${this.nome} está bebendo`)
  }
}

const p1 = new Pessoa('Eduardo', 'Faria')
