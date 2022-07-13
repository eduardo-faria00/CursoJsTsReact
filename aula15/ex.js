let numero = Number(prompt('Digite um número')) 
//o prompt retorna o valor digitado como string. Para realizar operações com o valor digitado, converte para number
const titleNumber = document.getElementById("titulo")
const texto = document.getElementById("text")

titleNumber.innerHTML = numero
texto.innerHTML = ''
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
