const alunos = [
    { nome: "Breno", nota: 7.3, bolsista: true},
    { nome: "Layla", nota: 9.2, bolsista: true},
    { nome: "Jaspion", nota: 9.8, bolsista: false},
    { nome: "Jiraya", nota: 8.7, bolsista: true}
]

const resultado =  alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, ' <> ' ,atual)
    return acumulador + atual
}, 10)

console.log('Resultado: ', resultado)