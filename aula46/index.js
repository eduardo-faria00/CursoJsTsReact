/*
'SetInterval' executa uma tarefa a cada intevalo de tempo definido
setIntervall(referencia da função que será executada, intevalo de tempo em ms)
Pode ser passada uma referencia de função, ou arrow function.

'SetTimeOut' executa uma tarefa uma vez só após o tempo definido.
*/

function horaAtual(){
    let data = new Date()
    //retorna a hora no formato brasileiro
    return data.toLocaleTimeString('pt-BR',{
        hour12: false
        // propriedades do objeto Date
    })
}
// Pode usar assim

/*
function intervale(){
    console.log(horaAtual())
}
setInterval(intervale, 1000); 
*/

// Ou assim...

const timer = setInterval(()=>{
    console.log(horaAtual())
}, 1000)

// vai parar a execução da função setInterval após 10s
setTimeout(() => {
    clearInterval(timer)
}, 10000);

/*
Quando o v8 encontrar a função setInterval ele vai iniciar a execução, mas
vai continuar lendo o que tem abaixo, e então vai executar a setTimeOut.
*/