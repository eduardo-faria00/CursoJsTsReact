/*
'Date' é uma função construtora.
Sempre que a função Date for executada sem receber nenhum parametro, um objeto será criado
automaticamente com os dados de hora e data e salvos na variável que recebe essa função.
Uma função construtora sempre começa com letra maiúscula.
O parametro que é passado para a função Date é o valor correspondente em milisegundos
desde o marco zero até a data atual. Marco zero (1 de janeiro de 1970) época unix
Pode omitir informações de data, exceto ano e mes. 
Obs: contagem de meses começa em zero, então mes 2 é março
*/

//=====================================================================================================================

/*
const data = new Date();
console.log(data) // exibe a data em formato numérico mostrando ano-mes-dia T hora:minuto:segundo.milésimos de segundo
console.log(data.toString()) // exibe a data em formato de string (formato gringo)
*/

//=====================================================================================================================

/*
const data = new Date(0) // passando o marco zero como parametro
console.log(data) // vai exibir a data do marco zero, 1 de janeiro de 1970
*/

//===================================================== Passando argumentos para a função ===============================

/*
const data = new Date(2001, 2, 28, 15, 45, 34, 600)// sempre números, sem zero a esquerda (ano, mes, dia, hora, min, seg, mseg)
console.log(data.toString())

const data = new Date(`2001-03-28 16:23:17`) // data passada como string
console.log(data.toString())
*/

//=========================================== Obtendo elementos específicos da função ===================================

/*
const data = new Date()
console.log(`Dia: ${data.getDate()}`)
console.log(`Mês: ${data.getMonth()+1}`) //para obter o número real do mês
console.log(`Ano: ${data.getFullYear()}`)
console.log(`Hora: ${data.getHours()}`)
console.log(`Minuto: ${data.getMinutes()}`)
console.log(`Segundo: ${data.getSeconds()}`)
console.log(`Milisegundo: ${data.getMilliseconds()}`)
console.log(`Dia da semana: ${data.getDay()+1}`) //para obter o número real da semana

console.log(Date.now()) //obtém o valor em milisegundos correspondente a data atual desde o marco zero
*/


