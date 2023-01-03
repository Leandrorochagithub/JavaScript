/*
Velocidade máxima = 70 km/h
A cada 5 km acmia do limite, ganha-se 1 ponto
Caso os pontos alcacem 12+ "Carteira suspendida"
Usar math.Floor() para aredondar valores


velocityVerify(130) 

function velocityVerify(velocity){ // A função recebe velocity
    if (velocity <= 70)
        console.log("Ok")
        else {
            const points = Math.floor(((velocity - 70 ) / 5)) // Dessa forma, se estiver a 80 km/h, por exemplo, terá a velocidade - a velocidade limite(70) e o resultado será  divido por 5. Assm, o resultado será 2, que são os pontos a serem atribuidos na carteira, já que se é a tribuído 1 ponto a cada +5 sobre o limite. 
            if (points >= 12)
            console.log('Carteira suspensa!')
            else
            console.log("Pontos: ", points)
        }
}

velocityVerify(130) 
*/
function velocityVerify(velocity){ // A função recebe velocity
    // com essas variáveis, se eu quiser mudar a velocidade máxima ou a quantidade de pontos, eu só preciso mudar o valor da variável.
    const maxVelocity= 70
    const pointsBykm= 5
    if (velocity <= maxVelocity)
        console.log("Ok")
        else {
            const points = Math.floor(((velocity - maxVelocity ) / pointsBykm)) // Dessa forma, se estiver a 80 km/h, por exemplo, terá a velocidade - a velocidade limite(70) eddo resultado será  divido por 5. Assm, o resultado será 2, que são os pontos a serem atribuidos na carteira, já que se é a tribuído 1 ponto a cada +5 sobre o limite. 
            if (points >= 12)
            console.log('Carteira suspensa!')
            else
            console.log("Pontos: ", points)
        }
}

