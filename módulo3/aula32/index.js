/*
para esse tipo de atribuição é necessário que as que as variáveis que receberão
os valores sejam do mesmo 'tipo' que o array. Se o array for const, as variáveis
devem ser const, se for let da mesma forma.
*/
const pessoas = ['Deneclei', 'Jonas', 'Godofredo', 'Dolores', 'Godolores']
const [fulano, ciclano, ... resto] = pessoas

console.log(fulano, ciclano)
console.log(resto)
/*
resto recebe todos os outros valores do array pessoas que não foram atribuidos
à nenhuma variável. 'resto' será um array.
O operador '...' pode ser 'rest' ou 'spread'.
*/