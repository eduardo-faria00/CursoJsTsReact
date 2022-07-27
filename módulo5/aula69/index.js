/*
É uma forma de iterar sobre arrays. Só está disponível para arrays
Só itera sobre os valores, não retorna nada.

array.forEach( (valor, indice, array) => {} )

Faz as funções do 'for in' e do 'for of'
*/
const array = [10, 20, 30, 40, 50]
array.forEach((value, index, array) => {
    console.log(value, index, array)
})
