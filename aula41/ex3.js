/*
Uma função que recebe um número e retorne:
divisível por 3 = Fizz
divisível por 5 = Buzz
divisível por 3 e 5 = FizzBuzz
não divisível por 3 e 5 = retorna o número
checa se é number
números entre 0 e 100
*/
const numero = (num) =>{
    if(typeof num !== 'number') return num
    if(num%3===0 && num%5 ===0) return 'FizzBuzz'
    if(num%3 === 0) return 'Fizz'
    if(num%5 ===0) return 'Buzz'
    return num
}

for(let i=0; i<=100; i++){
    console.log(i, numero(i))
}