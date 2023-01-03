class Spaceship { // Criando a classe
    constructor(name, crewQuantity) { // Adicionando construtor 
        this.name = name // name recebe name *
        this.crewQuantity = crewQuantity // *
        this.isHitched = false 
        this.entranceDoorsOpen = false
    }
    hitch() { // Se isHitched for TRUE, então entranceDoorsOpen será TRUE 
        this.isHitched = true
        this.entranceDoorsOpen = true
    }
}

function showMenu() { // Função para o menu do usuário
    let chosenOption // Atribuindo à função
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt(  "O que deseja fazer?\n" +
                                "1- Engatar nave\n" +
                                "2- Imprimir naves\n" +
                                "3- Sair do programa")
    } // Para repetir o menu até que uma das opções seja selecionada
    return chosenOption // Para retornar a função como chosenOption
}

function createSpaceship() { // Função para o menu de inserção de dados
    let spaceshipName = prompt("Informe o nome da nave")
    let crewQuantity = prompt("Informe a quantidade de tripulantes")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship // Para que spaceship receba os dados da função 
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList +=    (index + 1) + "- " + spaceship.name +
                            " (" + spaceship.crewQuantity + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = [] // Array vazio
let chosenOption // Está do escopo da função, então é diferente e não será confundido

while(chosenOption != "3") {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.hitch()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break
    }
}