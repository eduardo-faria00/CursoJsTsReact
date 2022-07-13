//============================== FORMAS DE CONCATENAÇÃO ===================================
let nome = 'Eduardo'
let frase = 'O rato roeu a roupa do rei de roma'

console.log(nome.concat(' ', 'Guedes', ' ', 'de', ' ', 'Faria'))
console.log(nome + '', 'Guedes', 'de', 'Faria')
console.log(`${nome} Guedes de Faria`) // Use essa maneira

//============================== EXIBIR CARACTERES ISOLADOS ===================================
console.log(nome[5])                // exibe o caracter correspondente ao indice 5 da string


console.log(nome.indexOf('d', 3))   // exibe o indice da letra 'd', após o indice 3
console.log(frase.search(/r/))      // aceita expressões regulares, retorna o indice da 1° letra 'r' na string frase.


console.log(frase.replace('r', '#'))    // Nesse caso só foi substituido primeiro r
console.log(frase.replace(/r/g, '#'))   // usando uma expressão regular para substituir todos os 'r' por '#'

//============================== FATIAR E DIVIDIR STRINGS ===================================

console.log(nome.slice(0, 4))       // Exibe a String do indice 0 até o indice 4 mas sem incluir o indice 4


console.log(frase.split(' '))       // Divide a String nos espaços e monta um array sem incluir os espaços
console.log(frase.split(''))        // Divide cada caracter da string incluindo os espaços e monta um array
console.log(frase.split('r'))       // Divide a string nas letras r sem incluir o r
console.log(frase.split(' ', 2))    // Divide a string nos espaços e monta um array com apenas duas posições