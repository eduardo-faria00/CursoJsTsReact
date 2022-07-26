const pontos = 999

if(pontos >= 1000)
console.log('VIP')
else
console.log('normal')

/**
 * Uma operação ternária serve para substituir expressoes condicionais simples
 * O '?' é equivalente ao 'if' e os ':' equivalente ao else
 * Antes de ? vem a condição, depois vem o valor verdadeiro, e depois de : vem o valor falso
 * Ou seja, VIP serial o valor do if e normal seria o valor do else de acordo com a condição de valor de pontos
 * (condição) ? 'valor se for verdadeiro' : 'valor se for falso'
 */

const nivel = pontos >= 1000 ? 'VIP' : 'normal'
console.log(nivel)

/**
 * Outro exemplo de operação ternária
 * Esse tipo de condição seta um valor padrão para uma variável
 * No caso abaixo, se o usuario não escolher uma cor a cor padrão será preto
 */

const corUser = null
const corPadrao = corUser || 'Preto'