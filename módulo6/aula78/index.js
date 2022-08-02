/*
A classe (função construtora) Conta tem como subclasses ContaCorrente e
ContaPoupança. O conceito de herança é utilizado aqui para usar o prototype
de Conta para as subclasses. Polimorfismo é quando o mesmo método se comporta
de maneiras diferentes em cada subclasse. No caso do método sacar, o comportamento
muda de acordo com a necessidade da subclasse que o utiliza. Esse é o 
polimorfismo de sobre-escrita
*/

function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag: ${this.agencia} Conta: ${this.conta} Saldo: R$ ${this.saldo.toFixed(2)}`)
}
//=============================================================================================

// O call faz a chamada da classe, faz o 'import' dos campos da classe Conta
function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
// importando o prototype de Conta para CC
CC.prototype = Object.create(Conta.prototype)
CC.prototype.constructor = CC
// alterando método 'sacar' para o prototype de CC
CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return
    }
    this.saldo -= valor
    this.verSaldo()
}
//=============================================================================================

function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}
// importando o prototype de Conta para CP
CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP

//=============================================================================================

const cc = new CC(1122, 3344, 50, 100)
const cp = new CP(2233, 4455, 100)

cc.sacar(65)
cc.depositar(1.5)
cc.sacar(110)

console.log()

cp.sacar(35)
cp.depositar(2.34)
cp.sacar(110)