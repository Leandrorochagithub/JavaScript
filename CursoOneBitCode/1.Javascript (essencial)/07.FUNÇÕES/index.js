let spaceshipName = prompt("Digite o nome da nave")
let spaceshipVelocity = 0
let chosenOption  
function showMenu() {
    let option /*Variável*/
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        //Se for diferente de 1,2,3 ou 4 repetir o showMenu
        option = prompt("O que deseja fazer?\n" +
            "1- Acelerar a nave em 5km/s\n" +
            "2- Desacelerar a nave em 5km/s\n" +
            "3- Imprimir dados de bordo\n" +
            "4- Sair de programa")
    }
    return option
}
function speedUp(velocity) {
    let newVelocity = velocity + 5
    return newVelocity
}
function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}
function printSpaceshipBoardData(name, velocity) {
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do {
    chosenOption = showMenu()/*Receberá 1,2,3 ou 4*/
    switch (chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
            break
        default:
            alert("Encerrando programa de bordo")
    }
} while (chosenOption != "4")