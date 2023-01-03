/*
Como nomear uma função: Verbo + Substantivo
*/

// Sem parâmetros
let colorSite= 'Black'
function resetColor(){ // sem parâmetro atribuido
    colorSite= 'white'
}
console.log(colorSite) // expected 'Black'
// Quando chamo a função
resetColor();
console.log(colorSite) // expected 'white'
//------------------------------------------------------------------------------

//Com parâmetro
let colorSite= 'Black'
function resetColor(newColor){
    colorSite= newColor
}
console.log(colorSite) // expected 'Black'
resetColor ('Red')
console.log(colorSite) // expected 'Red'*/
//------------------------------------------------------------------------------

let colorSite= 'Black'
function resetColor(newColor, tonality){ // Pode-se usar mais de um parâmetro
    colorSite= newColor + '  ' + tonality
}
console.log(colorSite) // expected 'Black'
resetColor ('Blue','dark')
console.log(colorSite) // expected 'Blue dark'