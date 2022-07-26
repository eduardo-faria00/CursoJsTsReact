/*
O 'continue' pula a execução do código a abaixo dele e executa a próxima
iteração do loop.

O 'break' sai do loop.

Obs: Sempre mudar a variável de controle antes de usar esses comandos
*/

const array = [1,2,3,4,5,6,7]

let i = 0
while(i < array.length){
    let numero = array[i]
    
    if(numero === 2){
        console.log('pulou o 2')
        i++
        continue;
        //o que vem depois de continue não é executado
    }
    console.log(numero)
    
    if(numero === 5){
        console.log('sai do loop aqui')
        i++

        break;
        //o laço é encerrado quando a condição for true
    }
    
    i++
}