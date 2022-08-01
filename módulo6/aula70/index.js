/*
Objetos são compostos de chave e valor. Uma chave pode ser acessada
por '.' ou por '[]'. A notação de colchete pode ser mais interessante
em caso de chave dinamica.
Um objeto pode ser criado pela notação literal, factory functions, 
constructor functions ou classes
*/
//=====================================================================
const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'faria',
    idade: 21
}

let chave = 'idade'
console.log(pessoa.nome)
console.log(pessoa['sobrenome'])
console.log(pessoa[chave])

//=====================================================================
function Pessoa(){
    this.nome
    this.sobrenome
}
const p1 = new Pessoa()
p1.nome = 'Esther'
p1.sobrenome = 'Mariana'
console.log(p1.nome, p1.sobrenome)
