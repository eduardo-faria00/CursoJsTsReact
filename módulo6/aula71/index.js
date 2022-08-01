/*
enumerable: define se a chave pode ser acessada externamente.
writable: define se o valor da chave pode ou não ser alterado após
a criação.
configurable: define se a chave pode ou não ser reconfigurada/apagada
*/

// ======================== DefineProperty ==========================

function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: true, // valor alterado
        configurable: true // configurável
    })
}

const p1 = new Produto('Camisa', 15, 10)
console.log(p1)

// ======================== DefineProperties ========================

function Pessoa(nome, sobrenome, idade){
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome,
            writable: true,
            configurable: true
        },
        nome: {
            enumerable: true,
            value: idade,
            writable: true,
            configurable: true
        }
    })
}
