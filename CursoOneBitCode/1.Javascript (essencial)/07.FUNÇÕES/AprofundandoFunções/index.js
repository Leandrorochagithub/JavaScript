function slowDown(velocity, printer) {
    let deceleration = 20 // Fator de desaceleração
    while(velocity > 0) { // Enquanto velocity > 0 = imprimir velocity, que passará a ter um decréscimo contínuo até 0 
        printer(velocity)
        velocity -= deceleration // Decréscimo contínuo até 0
    }
    alert("Nave parada. As comportas podem ser abertas.") // Alert no prompt após finalizar execuções
}
let spaceshipVelocity = 150 // Higher-Order Functions -> Velocidade da nave é 150 km/s
slowDown(spaceshipVelocity, function(velocity) { // Chamando a função slowdown (callback) -> Receberá a velocidade "spaceshipVelocity" e a função criada "velocity", que é atualizada a cada decréscimo
    console.log("Velocidade atual: " + velocity)
})

// result:
/*
PROMPT: Nave parada. As comportas podem ser abertas.

CONSOLE:
"Velocidade atual: 150"
"Velocidade atual: 130"
"Velocidade atual: 110"
"Velocidade atual: 90"
"Velocidade atual: 70"
"Velocidade atual: 50"
"Velocidade atual: 30"
"Velocidade atual: 10"
*/ 