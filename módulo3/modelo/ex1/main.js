function main() {
  const form = document.querySelector('form')
  form.addEventListener('submit', evento => {
    evento.preventDefault()

    const result = document.querySelector('.result')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    const imc = ((peso, altura) => {
      return peso / altura ** 2
    })(Number(peso.value), Number(altura.value))

    function resultado(msg) {
      result.innerHTML = ''
      const paragraph = document.createElement('p')
      paragraph.innerHTML = msg
      result.appendChild(paragraph)
    }
    if (imc < 18.5) {
      resultado(`Seu imc é ${imc.toFixed(2)}. Abaixo do peso.`)
    } else if (imc >= 18.5 && imc < 25) {
      resultado(`Seu imc é ${imc.toFixed(2)}. Peso normal.`)
    } else if (imc >= 25 && imc < 30) {
      resultado(`Seu imc é ${imc.toFixed(2)}. Sobrepeso.`)
    } else if (imc >= 30 && imc < 35) {
      resultado(`Seu imc é ${imc.toFixed(2)}. Obesidade grau 1.`)
    } else if (imc >= 35 && imc < 40) {
      resultado(`Seu imc é ${imc.toFixed(2)}. Obesidade grau 2.`)
    } else if (imc >= 40) {
      resultado(`Seu imc é ${imc.toFixed(2)}. Obesidade grau 3`)
    }
  })
}
main()
