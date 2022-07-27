/*
A função map recebe os mesmo parametros que a função filter, a diferença é o retorno.
Retorna um array do mesmo tamanho do array original, mas com os valores alterados.
Não altera o array original.

Sempre faça uma cópia quando for trabalhar com valores passados por referencia
*/
//===================================================================================

//retorna um array com o dobro dos valores do array original
const numeros = [5, 29, 3, 42, 2, 69, 7, 83, 9, 107, 11]
const dobro = numeros.map(valor => valor * 2)
console.log(dobro)

//===================================================================================
const pessoas = [
    {nome: 'Eduardo', idade: 21},
    {nome: 'Esther', idade: 19},
    {nome: 'Mariana', idade: 20},
    {nome: 'Katarina', idade: 1},
    {nome: 'José', idade: 3}
]

// retorna apenas os nomes de cada objeto do array
const nomes = pessoas.map(obj => obj.nome)
// console.log(nomes)

// retorna apenas as idades de cada objeto
const idade = pessoas.map(obj => obj.idade)
// console.log(idade)

// retorna um objeto sem a chave nome
const semNome = pessoas.map(obj =>{
    const newObj = {...obj}
    delete newObj.nome
    return newObj
})
// console.log(semNome)

// adiciona uma chave id em cada objeto
const id = pessoas.map((obj, index) => {
    const newObj = {...obj}
    newObj.id = index
    return newObj
})
// console.log(id)

