class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }
    // métodos de instância
    aumentarVolume(){
        this.volume += 1
        console.log(this.volume)
    }

    diminuirVolume(){
        this.volume -= 1
        console.log(this.volume)
    }
    // método estático, disponível apenas para a classe
    static trocaPilha(){
        console.log('Pilha substituida')
    }
}

/*
A instância "controle1" tem acesso aos campos e aos métodos da
classe "ControleRemoto". Cada instância tem seus próprios dados
baseados no molde da classe.

Métodos estáticos são métodos disponíveis apenas para a
classe, ou seja, não podem ser acessados por uma instância
*/

const controle1 = new ControleRemoto('LG')
// acessando método de instância
controle1.aumentarVolume()
// acessando método estático
ControleRemoto.trocaPilha()