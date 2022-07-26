const container = document.querySelector('.container')

const elementos = [
    {tag: 'p', texto: 'paragrafo'},
    {tag: 'div', texto: 'divisão'},
    {tag: 'footer', texto: 'rodapé'},
    {tag: 'section', texto: 'seção'},
]

const div = document.createElement('div')

for(let i=0; i<elementos.length; i++){
    let {tag, texto} = elementos[i]
    let element = document.createElement(tag)
    element.innerHTML = texto

    div.appendChild(element)
}
container.appendChild(div)