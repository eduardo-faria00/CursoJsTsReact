function main(){
    const form = document.querySelector('.form')
    const pessoas = []
    form.addEventListener('submit', (evento) =>{
        evento.preventDefault()
        
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas)
    })
}
main()