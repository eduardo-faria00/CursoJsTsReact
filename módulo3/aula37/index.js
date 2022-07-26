/*
iterar = percorrer indices.
O 'for of' diferente do 'for in' que retorna os indices, vai retornar os
valores de cada indice. Não da pra usar em objetos
*/
/*
const nomes = ['eduardo','esther','katarina']

//exibe os valores de cada indice do array 'nomes'
for(let valor of nomes){
    console.log(valor)
}
*/
//============================ forEach ==========================================
/*
o 'forEach' recebe uma função que deve receber os parametros (valor, indice, array). Usado para percorrer array apenas.
*/

nomes.forEach((valor, indice, array)=>{
    console.log(valor, indice, array)
});

