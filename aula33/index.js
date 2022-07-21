/*
Para esse tipo de atribuição com objetos, em vez de [] usa {}.
Pode especificar qual a chave que terá o valor atribuido, ou criar
uma variável qualquer para receber o valor da chave.
*/
const pessoa ={
    nome: 'Eduardo',
    sobrenome: 'Faria',
    idade: 21,
    endereco: {
        rua: 'Alguma',
        bairro: 'Outra coisa'
    }
}

const {nome: nome2, sobrenome} = pessoa
console.log(nome2, sobrenome)
/*
A variável nome2 recebe o valor da chave nome do objeto.
Como a variável 'sobrenome' tem o mesmo nome da chave 'sobrenome' do
objeto, ela automaticamente recebe o valor da chave.
*/

const {endereco: {rua, bairro}} = pessoa //pegando os campos rua e bairro do objeto endereco, dentro de 'pessoa'
console.log(rua, bairro)