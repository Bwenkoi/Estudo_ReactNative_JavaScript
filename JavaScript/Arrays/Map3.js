Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0 ; i<this.length ; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.50}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lápis", "preco": 41.90}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

//console.log(carrinho)

const json = e => {   
    return JSON.parse(e)
}

const preco = e => {   
    return e.preco
}

let meioCampo = carrinho.map2(json)
let resultado = meioCampo.map2(preco)

console.log(resultado)
