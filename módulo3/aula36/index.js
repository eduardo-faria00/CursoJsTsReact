/*
o 'for in' lê os indices ou chaves do array ou objeto.
*/

/*
const array = ['eduardo', 'esther', 'zé duardo', 'katarina']

// vai listar os indices do array
for(let i in array){
    console.log(i)
}
*/

//===========================================================================

const carro ={
    motor: '4 cilindros',
    cor: 'vermelho',
    rodas: 14,
    ano: 1994
}

// vai listar as chaves do objeto carro
for(let chave in carro){
    console.log(chave)
}

//===========================================================================
/*
Formas de acessar chaves de um objeto:
const chave = 'motor'
console.log(carro[chave])
*/

/*
console.log(carro.motor)
console.log(carro['motor']) //pode ser dinamico
*/