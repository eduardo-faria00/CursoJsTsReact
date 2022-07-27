function Calculator() {
    this.display = document.querySelector('.display')

    this.begin = () => {
        this.clicks()
    }
    this.clicks = () => {
        document.addEventListener('click', (event) => {
            let el = event.target

            if (el.classList.contains('btn-num') || el.classList.contains('btn-op')) this.display.value += el.innerText
            if (el.classList.contains('delete')) this.display.value = this.display.value.slice(0, -1)
            if (el.classList.contains('clear')) this.display.value = ''
            
            if (el.classList.contains('eq')) {
                try {
                    let op = eval(this.display.value);
                    if (!op) {
                        alert('Operação inválida');
                        return;
                    }
                    this.display.value = op;
                } catch (e) {
                    alert('Operação inválida');
                    return;
                }
            }
        })
    }
}

const calculator = new Calculator()
calculator.begin()