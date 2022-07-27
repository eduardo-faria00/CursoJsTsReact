/*
Uma função geradora é uma função que retorna alguma coisa por 'partes', uma  por uma
e não tudo de uma vez. Notação para função geradora 'function*'.
Em vez de usar return, use yield. Cada vez que a função for chamada, ela irá retornar
um valor diferente (yield). Para acessar um valor é preciso usar o método 'next'
*/
function* gerador(){
    yield 'valor1';

    yield 'valor2';

    yield 'valor3';
}

const g1 = gerador()
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)

//================================ Gerador infinito ======================================
function* gerador2(){
    let i = 0

    while(true){
        yield i
        i++
    }
}

const g2 = gerador2()
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
//============================= Gerador que delega função para outro ===================
function* gerador3(){
    yield 0
    yield 1
    yield 2
}
function* gerador4(){
    yield* gerador3()
    yield 3
    yield 4
    yield 5
}

const g4 = gerador4()
for(let valor of g4){
    console.log(valor)
}

