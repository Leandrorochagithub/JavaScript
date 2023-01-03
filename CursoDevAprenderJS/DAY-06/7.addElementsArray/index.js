// Como adicionar, encontrar, remover, dividir elementos e dividir e combinar Arrays
// Lembrando que um Array também é um opbjeto e possui propriedades
const numbers= [1,2,3]
// Adicionar elementos:
// No início
numbers.unshift(0)
console.log(numbers) // [ 0, 1, 2, 3 ]
// No meio
// (posição, o que quero deletar(0 para deletar nada), o que inserir)
numbers.splice(1,0,"A")
console.log(numbers) // [ 0, 'A', 1, 2, 3 ]
//  No final
numbers.push(4)
console.log(numbers) // [ 0, 'A', 1, 2, 3, 4 ]

