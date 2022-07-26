/*
O escopo léxico é o escopo de uma função. Por exemplo, quando uma função é declarada
ela tem 'conhecimento' do que está no próprio escopo, e do que está no escopo vizinho (global)
*/

const nome = 'Eduardo'

function saudacao (){
    const nome = 'Esther'
    console.log(`Olá ${nome}`)
}

/*
Se dentro do escopo da função não for encontrada a variável especificada, o v8
vai buscar a variável no escopo vizinho.

A função sempre se lembra de onde foi declarada e qual era o escopo no ato da 
declaração
*/