//===================================== FUNÇÃO PARA CRIAR OBJETOS ================================================

function criaPessoa (nome, sobrenome, idade){
    return {nome, sobrenome, idade}
}

const pessoa1 = criaPessoa('Eduardo', 'Faria', 21)
console.log(pessoa1)

/*
A função 'criaPessoa' recebe como parametros nome, sobrenome e idade e cria um objeto com os campos
nome, sobrenome e idade.
*/

//========================================= METODO DE OBJETO =====================================================

const aluno = {
    nome: 'Eduardo',
    sobrenome: 'Faria',
    idade: 21,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }
}

aluno.fala()

/*
Um metódo é uma função dentro de um objeto. No caso o objeto 'aluno' possui o metodo 'fala'.
O 'this' significada que os campos nome e sobrenome referenciados estão dentro do objeto. 
this.nome = campo 'nome' deste objeto.
*/