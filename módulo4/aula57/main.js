/*
OBS: As arrow functions não mudam o contexto do this
*/

function createCalculator() {
    return {
        display: document.querySelector('.display'),

        begin() {
            this.clicks()
        },
        clicks() {
            document.addEventListener('click', (event) => {
                let el = event.target

                if (el.classList.contains('btn-num') || el.classList.contains('btn-op')) {
                    this.display.value += el.innerText
                }
                if (el.classList.contains('delete')) {
                    this.display.value = this.display.value.slice(0, -1)
                }
                if (el.classList.contains('clear')) {
                    this.display.value = ''
                }
                if (el.classList.contains('eq')) {
                    let op = this.display.value;

                    try {
                        op = eval(op);

                        if (!op) {
                            alert('Operação inválida');
                            return;
                        }

                        this.display.value = String(op);
                    } catch (e) {
                        alert('Operção inválida');
                        return;
                    }
                }
            })
        }
    }
}

const calculator = createCalculator()
calculator.begin()