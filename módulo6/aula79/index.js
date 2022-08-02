/*
criaPessoa é uma factory function que retorna um objeto que tem como prototype
o objeto PessoaProto.
*/

function criaPessoa(nome, sobrenome){
    const PessoaProto = {
        falar(){
            console.log(`${this.nome} está falando`)
        },
        comendo(){
            console.log(`${this.nome} está comendo`)
        }
    }
    // define PessoaProto como prototype do objeto que será retornado
    return Object.create(PessoaProto, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Eduardo', 'Faria')
p1.falar()
p1.comendo()
