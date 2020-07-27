Array.prototype.forEach2 = function (callBack) {
    let i;
    for(i=0 ; i < this.length ; i++){
        callBack(this[i], i, this)
    }
}

const aprovados = ['Breno', 'Layla', 'Jaspion', 'Jiraya']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})