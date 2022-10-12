const rand = (min, max) => {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

/*
Uma promisse recebe uma função de callback que recebe dois parâmetros:
"resolve" é executado quando a promisse é resolvida e recebe um único
parâmetro.
"reject" quando algum problema ocorre na promisse.

O "then" recebe o mesmo parâmetro passado no resolve.
*/

const promisse = (msg, tempo) => {
    return new Promise((resolve, reject) => {
        
        if(typeof msg !== 'string') reject('bad value')

        setTimeout(()=> {
            resolve(msg)
        }, tempo)
    })
}

/**
 * A função "promisse" retorna uma promise, o then executa uma função
 * quando a promisse é resolvida.
 */

promisse('primeira execução', rand(1, 3))
    .then(response => {
        console.log(response)
        return promisse('segunda execução', rand(1, 3))
    })
    .then(response => {
        console.log(response)
    })