const aprovados = ['Breno', 'Layla', 'Jaspion', 'Jiraya']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})

console.log('-----------------------')

aprovados.forEach(nome => console.log(nome))

console.log('-----------------------')

const exibir = aprovado => console.log(aprovado)
aprovados.forEach(exibir)

