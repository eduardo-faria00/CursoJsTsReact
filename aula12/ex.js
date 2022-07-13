//Fazer o varA apontar para o valor de varB, varB apontar para varC e varC apontar para varA
let varA = 'A'
let varB = 'B'
let varC = 'C'

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
