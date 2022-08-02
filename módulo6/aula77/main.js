const inputCpf = document.querySelector('.cpf')
const placeholder = document.querySelector('.cpf').placeholder
const button = document.querySelector('.btn')

document.addEventListener('click', (event) => {
    let cpf = inputCpf.value
    event.preventDefault()

    if (event.target.classList.contains('btn')) {
        let cpfOne = cpf.slice(0, -2) 
        const digitOne = validation(cpfOne)
        const digitTwo = validation(cpfOne + digitOne)

        if(digitOne === cpf[cpf.length-2]&&digitTwo === cpf[cpf.length-1]){
            inputCpf.value = ''
            inputCpf.classList.add('valid')
            inputCpf.placeholder = 'CPF válido'
        }else{
            inputCpf.value = ''
            inputCpf.classList.add('invalid')
            inputCpf.placeholder = 'CPF inválido'
        }
    }
})

function validation(cpf) {
    cpf = Array.from(cpf.replace(/\D+/g, ''))
    let operator = cpf.length + 1

    const valid = cpf.reduce((ac, value) => {
        ac += operator * Number(value)
        operator--
        return ac
    }, 0)

    const firstDigit = 11 - (valid % 11)
    return firstDigit > 9 ? '0' : String(firstDigit)
}
