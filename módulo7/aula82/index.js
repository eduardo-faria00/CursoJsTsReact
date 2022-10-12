class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado= false
    }

    ligar(){
        if(this.ligado){
            return console.log(this.nome + ' já está ligado')
        }

        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`)
            return
        }

        this.ligado = false
    }
}

const d1 = new DispositivoEletronico('celular')
d1.ligar()
console.log(d1)
d1.ligar()

/*
criando uma nova classe herdando a estrutura de uma classe já existente.
A classe "SmartPhone" possui tudo que a classe dispositivo eletronico possui.

É possível alterar os métodos e adicionar campos na classe filha sem alterar
a classe pai, ou classes irmãs.
*/

class SmartPhone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome) // fazendo uma chamada da classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

const s1 = new SmartPhone('Samsung', 'preto', 'S-22')
console.log(s1)


