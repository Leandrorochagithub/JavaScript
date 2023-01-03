const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]
// spaceship é o callback
let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {  
    return spaceship[1] > 9 // Retornar elemento da posição [1] (crew) que for > 9(pelo .filter)

}).map(spaceship => { // .map para retornar só a posição [0] do array (nome)
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false // encontrar plataformas com engate pendente (posição [2] de cada array) / FindIndex retornará o índice(0,1,2) e não a posição, como o find faz.
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase() // Criando nova variável highlightedSpaceships que receberá a função hitchedSpaceships.map(spaceship => retornando nomes em caixa alta através da função .toUpperCase.
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ") // JOIN vai unir elementos e separar por , 
message += "\nPlataforma em processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)