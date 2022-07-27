/*
O método Splice altera o array original assim como o pop e o shift por exemplo

array.splice(x, y, z, z, z...)
x = indice onde vai começar a alteração
y = quantos elementos serão removidos
z = elementos que serão adicionados (serão adicionados no indice especificado)
*/

const nomes = ['Eduardo', 'Esther', 'Mariana', 'José', 'Katarina']
const removidos = nomes.splice(2, 2)
console.log(nomes, removidos)

