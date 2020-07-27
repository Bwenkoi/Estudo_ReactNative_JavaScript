const produtos = [
    {nome: 'Notebook', preco: 2499.00, fragil: true},
    {nome: 'iPad Pro', preco: 4199.00, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false} 
]

const filtroPreco = p => {
    if (p.preco > 500){
        return true
    }else{
        return false
    }
}
const filtroFragil = p => {
    return p.fragil
}


console.log(produtos.filter(filtroPreco).filter(filtroFragil))
