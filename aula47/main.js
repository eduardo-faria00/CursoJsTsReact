(function main() {
    const buttons = document.querySelectorAll('button')
    const clock = document.querySelector('.clock')
    let second = 0
    let timer

    function getHour(seconds) {
        const hour = new Date(seconds * 1000)
        return hour.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }
    function startTimer() {
        timer = setInterval(() => {
            second++
            clock.innerHTML = getHour(second)
        }, 1000)
    }

    document.addEventListener('click', (event) => {
        if (event.target == buttons[0]) {
            clearInterval(timer)
            startTimer()
            clock.classList.remove('pause')
        } else if (event.target == buttons[1]) {
            clearInterval(timer)
            clock.classList.add('pause')
        } else if (event.target == buttons[2]) {
            clearInterval(timer)
            clock.innerHTML = '00:00:00'
            second = 0
            clock.classList.remove('pause')
        }
    })
})()