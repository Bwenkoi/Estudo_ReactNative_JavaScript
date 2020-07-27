const alunos = [
    { nome: "Breno", nota: 7.3, bolsista: false},
    { nome: "Layla", nota: 9.2, bolsista: false},
    { nome: "Jaspion", nota: 9.8, bolsista: true},
    { nome: "Jiraya", nota: 8.7, bolsista: true}
]


console.log('Todos os Alunos são Bolsistas?')

const resultado1 =  alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(!atual){
        acumulador = false
    }

    return acumulador
}, true)


if(resultado1){
    console.log(resultado1, ' Sim!')
}else{
    console.log(resultado1, ' Não!')
}

console.log('<<>><<>><<>><<>><<>><<>><<>><<>>')

console.log('Algum Aluno é Bolsista?')

const resultado2 =  alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(atual){
       acumulador = true 
    }

    return acumulador
}, false)


if(resultado2){
    console.log(resultado2, ' Sim!')
}else{
    console.log(resultado2, ' Não!')
}