function createCalculator(){
    return {
        display: document.querySelector('.display'),
        
        begin(){
            this.clicks()
        },
        clicks(){
            document.addEventListener('click', (event) => {
                let el = event.target

                if(el.classList.contains('btn-num','btn-op')){
                    this.toDisplay()
                }
            })
        },
        toDisplay(){
            this.display.value += 
        }
    }
}

const calculator = createCalculator()
calculator.begin()