const alunos = [
    { nome: "Breno", nota: 7.3},
    { nome: "Layla", nota: 9.2},
    { nome: "Jaspion", nota: 9.8},
    { nome: "Jiraya", nota: 8.7}
]

//Imperativo
let total1 = 0
for(let i = 0 ; i < alunos.length ; i++){
    total1 = total1 + alunos[i].nota
}

console.log(total1/alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2/alunos.length)