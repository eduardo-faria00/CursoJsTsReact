/*
Uma função de callback é uma função executada após uma determinada ação
*/
function rand(min = 1000, max = 3000){
    return Math.random() * (max - min) + min
}

function f1(callback){
    setTimeout(()=>{
        console.log('função 1')
        if(callback) callback()
    }, rand())
}
function f2(callback){
    setTimeout(()=>{
        console.log('função 2')
        if(callback) callback()
    }, rand())
}
function f3(callback){
    setTimeout(()=>{
        console.log('função 3')
        if(callback) callback()
    }, rand())
}

//============================== callbacks ===========================
