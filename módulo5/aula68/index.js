// filtrar números pares
// dobrar os valores
// somar tudo

const numeros = [23, 13, 45, 76, 47, 98, 56]

const novo = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac += valor, 0)

console.log(novo)