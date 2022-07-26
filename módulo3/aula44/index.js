/*
try e catch: Tente executar {isso} caso ocorra erro, faça {isso}
OBS: Não exibir erros internos para o usuário final.

try{
    ...tenta...
}catch (erro que ocorreu){
    ...faça isso...
}

O finally sempre será executado
*/

try{
    console.log(erro) //variável 'erro' não está definida
}
catch(err){
    console.log('erro não existe')
}

//=============================================================================
function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números') //lança um erro se x ou y não for number
    }
    return x+y
}
try{
    console.log(soma(2, 5))
    console.log(soma('a', 5))
}catch(err){
    console.log(err)
}

//=============================================================================
try{
    console.log('comando correto')
    console.log(naoExiste)
    console.log('não vai executar')
}catch(err){
    console.log('Deu erro')
}finally{
    console.log('com ou sem erro vai executar')
}