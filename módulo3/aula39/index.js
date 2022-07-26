/*
'while' primeiro checa a condição e se for true executa o código

'do while' primeiro executa o código, depois checa a condição e 
para quando for false. sempre executa pelo menos uma vez
*/

/*
let cont = 0
while(cont <=10){
    console.log(`repete ${cont}`)
    cont++
}
*/

//==================================================================================

// Função que retorna um número aleatório
function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
// while
let rand
while (rand !== 10) {
    rand = random(1, 50)
    console.log(rand)
}
// do while
do {
    rand = random(1, 50)
    console.log(rand)
} while (rand !== 10)

