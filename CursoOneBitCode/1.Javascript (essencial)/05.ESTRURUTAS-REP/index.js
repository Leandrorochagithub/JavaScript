let Ask = 0
let SpaceshipName = prompt("Olá, piloto!\nQual o nome da sua nave?")
let AskSpace = prompt("Ok, " + SpaceshipName + ", deseja realizar a próxima dobra?\n1. SIM\n2. Não")

while (AskSpace == '1') {
    Ask += 1
    AskSpace = prompt("Ok, " + SpaceshipName + ", deseja realizar a próxima dobra?\n1. SIM\n2. Não")
}
alert("Nome da nave: " + SpaceshipName + "\n" + 'Número de dobras realizadas: ' + Ask)

/* RESOLUTION
let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")

chosenOption = prompt("Deseja entrar em dobra espacial?\n1- Sim\n2- Não")

while(chosenOption == "1") {
    warpCount += 1
    chosenOption = prompt("Deseja realizar a próxima dobra?\n1- Sim\n2- Não")
}

alert("Nave: " + spaceship + "\nQuantidade de dobras: " + warpCount)*/