/*
Reduce geralmente é utilizado para reduzir o array em um único elemento

array.reduce( (acumulador, valor, indice, array) => {}, valor do acumulador)
O valor padrão do acumulador será o valor do primeiro item do array.
*/
//==========================================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const total = numeros.reduce((ac, valor)=> ac += valor, 0)
console.log(total)

//==========================================================================

const pessoas = [
    {nome: 'Eduardo', idade: 21},
    {nome: 'Esther', idade: 19},
    {nome: 'Mariana', idade: 20},
    {nome: 'Katarina', idade: 1},
    {nome: 'José', idade: 3}
]

// retorna a pessoa mais velha
const maisVelha = pessoas.reduce((ac, valor)=>{
    if(ac.idade > valor.idade) return ac
    return valor
})
console.log(maisVelha)