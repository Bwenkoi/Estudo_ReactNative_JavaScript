const pessoa = {
    nome: 'Breno',
    idade: 22,
    endereco: {
        rua: 'Aparício Pereira Martins',
        numero: 103
    } 
}

const { nome, idade } = pessoa
console.log (nome, idade)

const { nome: n, idade: i } = pessoa
console.log (n, i)

const { sobrenome, humor = true } = pessoa
console.log (sobrenome, humor)

const { endereco: { rua, numero, cep } } = pessoa
console.log (rua, numero, cep)