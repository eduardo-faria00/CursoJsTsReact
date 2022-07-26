/*
Uma factory function é uma função que retorna outra função
ou objetos com alguns metodos.

O 'this' referece à chave do objeto que chamou o método
*/

function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        fala(tema){
            return `${this.nome} está falando sobre ${tema}`
        },
        peso,
        altura,
        get imc(){
            const index = this.peso / (this.altura ** 2)
            return index.toFixed(2)
        },
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        }
    }
}

const p1 = criaPessoa('Eduardo', 'Faria', 65, 1.69)
console.log(p1.fala('java script'))
console.log(p1.imc)
p1.nomeCompleto = 'Esther Mariana Andrade'
console.log(p1.nome)
console.log(p1.sobrenome)
/*
O acessador 'get' faz o metodo se comportar como uma propriedade do objeto.
Um acessador get não pode receber nenhum parametro.
Métodos que apenas retornam valores podem receber o acessador get (getter)
*/