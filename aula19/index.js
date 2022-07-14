/*
Tipos de dados primitivos são imutáveis: string, number, boolean, undefined,
null (bigint, symbol)

Tipois de dados por referencia são mutáveis: array, object, function
*/

let nome = 'Eduardo'
let nome2= nome
/*
A variável nome recebe um valor do tipo string e a variavel nome2 faz uma cópia do valor de nome. 
Se o valor de nome for alterado, o valor de nome2 ainda será mantido, pois cada variável aponta para um
espacço na memória. É possivel trocar o valor que a variável recebe
mas não é possível fazer uma alteração nesse valor. Só é possivel fazer uma alteração no valor
utilizando algum método que faça isso.
*/

nome = 'Julia'      //isso pode
console.log(nome)   //vai exibir 'Julia' pois mudamos o valor da variavel nome
console.log(nome2)  //vai exibir 'Eduardo' pois ainda guarda a cópia do primeiro valor.

nome[2] = 'b'  //isso não pode
console.log(nome)
console.log(nome2)


const nomeAlt = nome.replace(/a/, 'o') //nomeAlt salva a alteração temporaria feita pelo metodo replace
console.log(nomeAlt)

//================================ VALORES POR REFERENCIA =============================================

let x = [1,2,3]
let y = x
console.log(x, y)

y.push(4)
console.log(x, y)

/*
Como x e y possuem valores referenciados, ao declarar que y = x, ambos passaram a apontar para o mesmo local 
da memória, ou seja, se for realizada uma alteração em, o outro será afetado.
*/




