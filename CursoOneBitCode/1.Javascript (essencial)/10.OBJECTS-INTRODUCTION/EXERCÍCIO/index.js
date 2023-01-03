let spaceship = { //Início do objeto
    velocity: 0,
    speedUp: function(acceleration) { //SpeedUp recebe uma função, que recebe acceleration 
        this.velocity += acceleration // this para se referir à velocity dessa declaração spaceship
    }
}
// Função para coletar dados
function registerSpaceship() { // Para registrar os dados necessários que virão do usuário. Para isso o campo para receber os parâmetros deve estar vazio(){parâmetros}
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
    // number para converter uma string em número
}
// Função para acelerar
function accelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
                "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}
// Função para parar
function stop() {
    alert(  "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: "
            + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}
// Função para abrir um menu de perguntas para o usuário
function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                accelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opção inválida")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()