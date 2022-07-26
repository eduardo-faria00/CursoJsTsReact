const container = document.querySelector('.container')
const ps = document.querySelectorAll('p') //cria um NodeList em 'ps' de todos os 'p' do document
//NodeList é indexado

const styleBody = getComputedStyle(document.body)//obtendo os estilos do body computados pelo browser
const backgroundBody = styleBody.backgroundColor

for (let p of ps){
    p.style.backgroundColor = backgroundBody //acessando estilos do 'p'
    p.style.color = 'aliceblue'
}