const rand = (min, max) => {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

const promiseExample = (msg, tempo) => {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject('bad value')

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

/**
 * Métodos para promises:
 * Promise.all => retorna um array de promises resolvidas
 * Promise.race
 * Promise.resolve
 * Promise.reject
 */

const promises = [
    promiseExample('excute 1', 3000),
    promiseExample('excute 2', 2000),
    promiseExample('excute 3', 500),
    promiseExample('excute 4', 1000)
]


// retorna um array com todas as promises do array "promises" resolvidas.
// Se uma promise for rejeitda, retorna essa promise apenas.
Promise.all(promises)
    .then(responses => {
        console.log(responses)
    })
    .catch(error =>{
        console.log(error)
    })

// retorna o valor da primeira promise resolvida do array de promises.
// vai retornar "execute 3"
Promise.race(promises)
    .then(response => {
        console.log(response)
    })
