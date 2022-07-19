/*
O Switch/case é também uma estrutura condicional alternativa ao if/else.
É mais usada quando todas as condições possíveis são conhecidas.
O default é equivalente ao else, será executado quando nenhum dos casos
for satisfeito. O break sinaliza para que a execução do código seja interrompida
quando a condição for satisfeita. Caso não seja inserido o case, todas as condições
serão executas independente se for true ou false.
*/

//============================================================================

const data = new Date()
let dia = data.getDay()
let diaTexto

switch(dia){
case 0:
    diaTexto = 'Domingo'
break

case 1:
    diaTexto = 'Segunda'
break

case 2:
    diaTexto = 'Terça'
break

case 3:
    diaTexto = 'Quarta'
break

case 4:
    diaTexto = 'Quinta'
break

case 5:
    diaTexto = 'Sexta'
break

case 6:
    diaTexto = 'Sabado'
break
default:
    diaTexto = ''
}
console.log(diaTexto)

//============================================================================