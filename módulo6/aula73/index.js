/**
 * Object.values (retorna os valores das chaves)
 * Object.entries (retorna um array com chave e valor para cada chave do objeto)
 * Object.assign (des, any) (faz uma cópia do objeto)
 * Object.getOwnPropertyDescriptor (o, 'prop') (retorna as configurações de uma propriedade)
 * ... (spread)
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto para não ser mais alterado)
 * Object.defineProperty (define uma propriedade)
 * Object.defineProperties (define várias propriedades)
 */

const pessoa = {nome: 'Eduardo', sobrenome: 'Faria'}
// const outraPessoa = pessoa

/*
dessa forma ambos apontam para o mesmo local na memória
alterar um altera o outro. Para criar um cópia use o spread operator.
O Object.assign também cria uma cópia de um objeto para outro
*/

const outraPessoa = {...pessoa}
outraPessoa.nome = 'Esther'
console.log(pessoa, outraPessoa)
