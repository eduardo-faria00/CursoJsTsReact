/*
Uma função construtora cria um objeto e retorna o mesmo a partir de um molde.
Uma função construtora sempre tem o nome iniciado com letra maiúscula e é
obrigatório o uso da palavra 'new'.
O 'new' cria um novo objeto vazio, aponta o this para esse objeto e retorna o objeto.

Tanto nas funções constutoras quanto nas funções fabrica é possível criar um atributo privado
usando const ou let.

Dentro das funções construtoras não é necessários separar as propriedades/metodos por vírgula
*/
function Pessoa(nome, sobrenome){
    //privado
    const cpf = 0
    // atributos ou metodos públicos
    this.nome = nome
    this.sobrenome = sobrenome
    this.fala = ()=>{
        console.log('Olá mundo')
    }
}

const p1 = new Pessoa('Eduardo', 'Faria')