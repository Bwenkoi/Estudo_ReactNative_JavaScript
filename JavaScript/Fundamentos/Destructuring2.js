const [a, b , c, d] = [10, 20, 30, 40]
console.log(a, b ,c ,d)

const[n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3 ,n5 ,n6)

const [,[, nota ]] = [[, 8,8], [9,6,8]]
console.log(nota)