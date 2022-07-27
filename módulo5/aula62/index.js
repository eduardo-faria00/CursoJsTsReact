const nomes = ['Eduardo', 'Esther', 'Katarina']
// para excluir um item do array sem alterar os indices use:
delete nomes[2] // o indice 2 será um empty item

/*
Um array também pode ser definido usando o construtor do array
const nomes = new Array('Eduardo', 'Esther', 'Katarina').
*/

//================= Valores por referencia ============================
/*
Arrays com valores passados por referencia apontam para o mesmo local da memória,
ou seja, alterar um também altera o outro.
Para fazer uma cópia dos valores de um array para outro use o rest operator.
"novo = [...nomes]"
*/
//novo e nomes agora apontam para o mesmo local na memória
const novo = nomes

//=============================== SPLIT ===============================
/*
O método 'SPLIT' separa uma string no caracter selecionado e retorna
um array.
*/

const nome = 'Eduardo Guedes de Faria'
const arrayNome = nome.split(' ') // Separa a string nome nos espaços e retorna um array com os valores

