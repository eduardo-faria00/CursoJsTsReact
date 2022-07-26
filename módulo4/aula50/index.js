/*
Para funções declaradas com 'function' o v8 cria uma variável que guarda todos
os argumentos passados para essa funcção chamada 'arguments'. Não funciona em
arrow function
*/

function ola(){
    console.log(arguments)
}
ola('argumento1', 'argumento2', 'argumento3')

// valor padrão em parametros

function soma(a = 0, b = 0){
    console.log(a + b) 
}
soma(2)
/*
Nesse caso, a omissão de qualquer um dos argumentos ainda retornará uma soma
pois os valores padrão setados são zero.
*/

// omissão de argumentos

function funcao(a, b, c, d){
    console.log(a, b, c, d)
}
funcao('valor de a', 'valor de b')
/*
A omissão dos argumentos para os parametros 'c' e 'd' vão gerar 'undefined' 
*/

// rest operator em arrow function

const funcao = (...args)=>{
    console.log(args)
}
funcao('valor 1', 'valor 2', 'valor 3', 50, 60)

/*
o operador rest cria uma array args que recebe os valores dos argumentos passados
*/