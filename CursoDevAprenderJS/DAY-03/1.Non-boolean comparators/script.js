/*
Falsy:
- undefined
- null
- 0
- false
- ' ' 
- NaN - not a number 
*/

//Truthy: o que não se classificar como Falsy.

// Entre Falsy e Truthy, o retornado é o Thuthy:
// false || 'Lionel' -> 'Lionel'
// false || 1 -> 1
// false || 1 || 3 -> 1: O operador || analisa somento a primeira comparação

let customColor= 'Red'
let stantardColor= 'Black'
let profileColor= customColor || stantardColor

console.log(profileColor) // 'Red': 'O opertador ||, ao encontrar um Truthy, para de fazer comparação.
/*
let customColor= NaN
let stantardColor= 'Black'
let profileColor= customColor || stantardColor

console.log(profileColor) // 'Black': ' ' é um Falsy, então é ignorado até achar um Truthy.
*/