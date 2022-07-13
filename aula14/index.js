let num1 = 15.9965
let num2 = 5.5

console.log(num1 + num2)            //exibe a soma pois são dois tipos number
console.log(num1.toString() + num2) //faz a concatenação pois num1 está sendo convertido para string temporariamente
console.log(num1.toString(2))       //exibe o num1 em binário
console.log(num1.toFixed(2))        //exibe o num1 com apenas duas casas decimais arredondadas

console.log(typeof num1)


num1 = num1.toString() //altera o tipo de num1 para string
console.log(typeof num1)

