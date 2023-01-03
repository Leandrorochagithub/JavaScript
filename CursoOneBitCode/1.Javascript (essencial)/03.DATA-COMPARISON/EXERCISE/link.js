alert('Neste exercício você é um piloto de nave espacial iniciando uma missão e a central de controle se comunicará com você. Boa sorte!')
let pilotName = prompt('Bem-vindo! Qual é o seu nome, piloto?')
let velocity = 0 //It's necessary declare the velocity to declare New velocity
let newVelocity = prompt('A que velocidade você quer acelerar, ' +pilotName+ '?')
let confirmVelocity = confirm(pilotName+', você está indo de  ' +velocity+ ' para ' +newVelocity+ ' km/s')

 // velocity = newVelocity //Thus, don't matter if confirmVelocity was confirmed. Executing normally
if(confirmVelocity) {
    velocity = newVelocity
} // just will execute the next conditionals if confirmVelocity will be confirmed. Executing Alert to velocity <=0

// If the pilot don't confirm, return 0
if(velocity <= 0) {
    alert('A nave está parada, considere movê-la e acelerá-la')
} else if(velocity < 40) {
    alert('A velocidade da nave é ' + velocity + '. Você está lento, podemos acelerá-lo ')
} else if(velocity < 80) {
    alert('A velocidade da nave é ' + velocity + '. Parece uma boa velocidade para manter ')
} else if(velocity < 100) {
    alert('A velocidade da nave é ' + velocity + '. Alta velocidade, considere diminuir a velocidade')
} else {
    alert('Velocidade perigosa, controle automático forçado')
}
alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "km/s")
