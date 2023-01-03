// Função para desacelerar, que recebe os parâmetros velocity e printer
function slowDown(velocity, printer) {

    //Variável deceleration recebe valor 20 enquanto velocity > 0, e o parâmetro printer recebe "nova velocity"
    let deceleration = 20
    while(velocity > 0) {
        printer(velocity)

        // velocity = velocity-deceleration
        velocity -= deceleration
    }
    alert("Nave parada. As comportas podem ser abertas.")
}
let spaceshipVelocity = 150
// slowDown recebe parâmetros spaceshipVelocity e a função velocity (do printer(velocity -= deceleration))
slowDown(spaceshipVelocity, function(velocity) {
    console.log("Velocidade atual: " + velocity)
})




