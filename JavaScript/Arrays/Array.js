console.log (typeof Array, typeof new Array)

let aprovados = new Array ('Breno', 'Layla')

console.log(aprovados, 'Tamanho: ', aprovados.length)

aprovados = ['Breno', 'Layla']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

console.log('-----------------')

aprovados[2] = 'Jaspion'
console.log(aprovados, 'Tamanho: ', aprovados.length)

console.log('-----------------') 

aprovados.push('Jiraya')
console.log(aprovados, 'Tamanho: ', aprovados.length)

console.log('-----------------')

aprovados[9] = 'Jiban'
console.log(aprovados, 'Tamanho: ', aprovados.length)

console.log('-----------------')

aprovados.sort()
console.log(aprovados)

console.log('-----------------')

delete aprovados[1]
console.log(aprovados)

console.log('-----------------')

aprovados.splice(1, 2, 'Tommy', 'Kimberly')
console.log(aprovados)

console.log('-----------------')
