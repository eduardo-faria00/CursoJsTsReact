const data = new Date()
const day = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
const month = ['janeiro', 'fevereiro', 'março', 'abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']

const title = document.querySelector('h1')
const newData = `${day[data.getDay()]}, ${data.getDate()} de ${month[data.getMonth()]} de ${data.getFullYear()}. ${data.getHours()}h${data.getMinutes()}`

title.innerHTML = newData

console.log(newData)

/*
Outra maneira de resolver:

const data = new Date()
const title = document.querrySelector('h1')

title.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short'})

*/