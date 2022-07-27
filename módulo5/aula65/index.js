/*
Filter, recebe como argumento uma função e retorna um array que satisfaz
as condições dispostas na função. Não altera o array original.

array.filter( (valor, indice, array) => {} )

*/
//==============================================================
const numeros = [5, 29, 3, 42, 2, 69, 7, 83, 9, 107, 11]
const novo = numeros.filter(n => n >= 10)
console.log(novo)
//==============================================================
const pessoas = [
    {nome: 'Eduardo', idade: 21},
    {nome: 'Esther', idade: 19},
    {nome: 'Mariana', idade: 20},
    {nome: 'Katarina', idade: 1},
    {nome: 'José', idade: 3}
]
//filtra as pessoas com nome com mais de 5 caracteres
const pessoas2 = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoas2)

//filtra as pessoas com idade maior que 10
const pessoas3 = pessoas.filter(obj => obj.idade > 10)
console.log(pessoas3)

// filtra todas as pessoas cujo nome termina com 'a'
const pessoas4 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(pessoas4)
