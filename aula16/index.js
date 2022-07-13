const pessoas = ['Duardo', 'Zé', 'Mateus', 'Fulano'] //sempre atribuir valores do mesmo tipo em um array
console.log(pessoas)
//=================================== ADICIONAR E ALTERAR ELEMENTOS DO ARRAY ======================================

pessoas.push('Ciclano') //adiciona um elemento no final no array
console.log(pessoas)

pessoas.unshift('Ana')  //adiciona um elemento no inicio do array
console.log(pessoas)

pessoas[3] = 'Alguém'   //altera o elemento no indice 3
console.log(pessoas)

//=================================== REMOVER ELEMENTOS DO ARRAY ======================================

pessoas.pop();          //remove o ultimo elemento do array
console.log(pessoas)

const removido = pessoas.pop(); //salva os elementos removidos do array na constante 'removido'
console.log(removido)

pessoas.shift();        //remove o primeiro elemento do array
console.log(pessoas)    //da mesma forma o elemento removido pode ser salvo em uma constante/variável

delete pessoas[2]       //apaga o elemento do indice 2, mas mantém o indice, ou seja, fica com elemento vazio
console.log(pessoas)