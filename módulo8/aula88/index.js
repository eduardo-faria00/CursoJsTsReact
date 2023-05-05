/**
 * Async e await permite um "aninhamento" de funções assíncronas de
 * forma mais limpa.
 */

const promiseExample = (msg, tempo) => {
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string') reject('bad value')

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

async function execute (){
    
    try {
        const fase1 = await promiseExample('teste 1', 2000)
        console.log(fase1)

        const fase2 = await promiseExample('teste 1', 2000)
        console.log(fase2)

        const fase3 = await promiseExample('teste 1', 2000)
        console.log(fase3)

    } catch (error) {
        console.log(error)
    }
}

execute()