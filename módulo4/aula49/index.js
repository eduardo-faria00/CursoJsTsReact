/*
Funções declaradas com 'function' sofrem hoisting.
O hoisting  ocorre porque o v8 eleva a declaração da função para o inicio
do script, o que torna possível usar a função antes de declarar.

Funções são objetos de primeira classe. Podem ser tratadas como dados.
Funções anonimas são function expression
*/

oi()

function oi(){
    console.log('Olá mundo')
}

// função como dado
const meuNome = () => {
    console.log('eduardo')
}
// função que recebe função.

function funcao (funcao){
    funcao()
}

// arrow function é uma function expression.

const arrow = () => {
    console.log('arrow function')
}
arrow()

// função dentro de objetos

const obj = {
    falar: ()=>{
        console.log('oi')
    }
}

obj.falar()

/*
Pode ser declarado assim:
const obj = {
    falar(){
        console.log('oi')
    }
}
*/