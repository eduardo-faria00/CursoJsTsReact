const pessoas = [
    {id: 4, nome: 'Eduardo'},
    {id: 3, nome: 'Esther'},
    {id: 2, nome: 'José Eduardo'},
    {id: 1, nome: 'Rebeca'}
]

const novasPessoas = new Map()
for(let pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}