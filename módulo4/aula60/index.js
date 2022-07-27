/*
Uma função recursiva é uma função que 'se chama' de volta após a execução e precisa de um limite
de vezes que será executada. O prórprio navegador estabelece um limite de vezes para execução de
recursividade.
*/
function recursiva(max){
    if(max >= 10) return
    max++
    console.log(max)
    recursiva(max) 
}
recursiva(0)