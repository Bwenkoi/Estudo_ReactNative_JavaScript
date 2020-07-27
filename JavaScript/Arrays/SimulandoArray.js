const quaseArray = {
    0: 'Breno',
    1: 'Layla',
    2: 'Frodo'
}

console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const outroArray = ['Breno', 'Layla', 'Sam']
console.log(quaseArray.toString(), outroArray) 