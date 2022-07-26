/*
uma função pode ou não retornar algum valor. Nem sempre uma função sem retorno
é inutil. Para capturar o valor de uma função em uma variável, a função deve
retornar algum valor
*/

// alert('ola mundo')
// essa função não retorna nada mas é util

function dontReturn() {
    console.log('sem retorno')
}

const s1 = dontReturn()
console.log(s1) // será undefined

/*======================== função que retorna função ===========================*/

function multiplicador(mult) {
    return (n) => {
        return n * mult
    }
}

/*
essas constantes recebem o retorno da função multiplicador
e através delas a segunda função é executada
*/

const duplo = multiplicador(2)
const triplo = multiplicador(3)
const quadruplo = multiplicador(4)

console.log(duplo(7)) // será 14
console.log(triplo(7)) // será 21
console.log(quadruplo(7)) //será 28