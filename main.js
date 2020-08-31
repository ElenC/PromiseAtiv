// 2. Atividade Promise
 new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('carregando')
    }, 4000);
}).then(resolve =>{
    document.getElementById('loading').innerHTML = '<h1>Successfully uploaded</h1>'
}).catch(reject =>{
    document.etElementById('loading').innerHTML = '<h1> Erro ao carregar!! </h1>'
})
