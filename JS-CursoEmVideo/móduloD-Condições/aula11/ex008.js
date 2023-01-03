/*  Comando sequencial | Sempre executará a multa
var vel= 60.5
console.log(`Sua velocidade é ${vel} km/h.`)
console.log(`Voce ultrapassou a velocidade permitida. MULTADO !`)
console.log(`Dirija sempre em segurança.`)
*/

// Solução: Usar o IF

var vel = 30
console.log(`Sua velocidade é ${vel} km/h.`)
if (vel < 31) {
    console.log(`Você está muito devagar. ACELERE !`)
}
if ((vel > 55) && (vel < 60)) {
    console.log(`Você está próximo da velocidade limite. CUIDADO !`)
}
if (vel == 60) {
    console.log(`Você está na velocidade limite. ATENÇÃO !`)
}
if (vel > 60) {
    console.log(`Você ultrapassou a velocidade permitida. MULTADO !`)
}
console.log(`Dirija sempre em segurança.`)
