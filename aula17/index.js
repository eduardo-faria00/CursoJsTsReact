function saudacao(nome) {
    console.log(`Bom dia ${nome}`)
}

saudacao('Eduardo')

/*
A função saudacao recebe 'nome' como parametro, que só pode ser acessado no corpo da função
e o valor de nome é atribuido no momento da chamada da função.
Uma função não precisa necessariamente receber algum parametro.
Por padrão uma função retorna undefined, a menos que seja especificado o que deve ser retornado.
*/

function soma(a, b){
    console.log(`A soma dos valores atribuidos para "a" e "b" é: ${a + b}`)
    return a+b
}

const resultado = soma(3, 4)
console.log(resultado)

/*
No caso da função 'soma' são passados dois parametros 'a' e 'b' e em seguida são somados os dois valores
atribuidos a esses parametros, e essa soma é retornada pela função.
A variável resultado recebe o valor retornado pela função soma. No caso de uma função onde não é especificado
o que será retornado, o valor de retorno padrão é undefined.

UMA FUNÇÃO PODE OU NÃO EXECUTAR UMA AÇÃO ASSIM COMO PODE OU NÃO RETORNAR ALGUMA COISA.

IMPORTANTE: Sempre que a execução da função chegar em return, nenhuma das linhas abaixo 
dentro da função serão executadas.
*/
//============================== FUNÇÃO ANONIMA =================================================
const raiz = function (n){
    return n ** 0.5
}

console.log(raiz(81))

/*
Uma outra forma de declarar uma função é atribuir a função a uma variável/constante.
Nesse caso, não é necessário definir um nome para a função, por isso função anonima, e os parametros
da função são passados pela variável.
=====================================
const raiz = (n) => {
    return n ** 0.5
}
====================================
exemplo de arrow function
*/