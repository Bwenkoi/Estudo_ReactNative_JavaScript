const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(10, 5)
imprimirResultado(10, 5, soma)
imprimirResultado(10, 5, function (x, y){
    return x - y
})
imprimirResultado(10, 5, (x, y) => x * y)

const pessoa = {
    falar() {
        console.log('São Exemplos de Funções!')
    }
}

pessoa.falar()
