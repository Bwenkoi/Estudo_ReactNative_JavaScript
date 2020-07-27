const jogadores = ['Messi', 'Ronaldo', 'Ney', 'Soteldo']

jogadores.pop()
console.log(jogadores)

console.log('--------------------------')

jogadores.push('Salah')
console.log(jogadores)

console.log('--------------------------')

jogadores.shift(jogadores)
console.log(jogadores)

console.log('--------------------------')

jogadores.unshift('Messi')
console.log(jogadores)

console.log('--------------------------')

jogadores.splice(2, 0, 'Mané', 'Hazard')
console.log(jogadores)

console.log('--------------------------')

jogadores.splice(3, 1)
console.log(jogadores)

console.log('--------------------------')

const algunsJogadores1 = jogadores.slice(2)
const algunsJogadores2 = jogadores.slice(1, 4)
console.log(algunsJogadores1)
console.log(algunsJogadores2)

console.log('--------------------------')
