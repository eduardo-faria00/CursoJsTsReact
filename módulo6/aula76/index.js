function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = (percentual)=> this.preco -= this.preco * (percentual/100)

function Camisa(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa