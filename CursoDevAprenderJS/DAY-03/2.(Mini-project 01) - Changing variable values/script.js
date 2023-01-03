
// Trocar a ordem dos resultados de a e b:

/*
let a= 'Red'
let b= 'Blue'
let result= (a=b) && (b='Red')

console.log(a) // Blue
console.log(b) // Red
*/

let a= 'Red'
let b= 'Blue'
let c=  a // Red: O valor de a é guardado em c para que possa ser modificado.
a= b // Blue
b= c // Red



console.log(a)
console.log(b)