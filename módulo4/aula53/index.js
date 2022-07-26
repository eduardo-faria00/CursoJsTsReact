function retornaFuncao(){
    const nome = 'eduardo'
    return ()=>{
        return nome
    }
}

const funcao = retornaFuncao()
// closure em resumo é o mesmo que escopo