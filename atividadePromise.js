//1. Atividade Promise

function espereNSegundos(numInteiro){
    let promise = new Promise((resolve, reject) =>{
        if(Number.isInteger(numInteiro)){
        setTimeout(() => {
            resolve('É um número inteiro')
        }, 1000 * numInteiro);
    }else{
        reject('Não é número inteiro')
    }
    }).then(resolve =>{
        console.log('Número inteiro: ' + numInteiro)
    }).catch(reject =>{
        console.log('Não é número inteiro ' + numInteiro)
    }).finally(() =>{
        console.log('Cálculo verificado com sucesso')
    })
}
espereNSegundos(2)

