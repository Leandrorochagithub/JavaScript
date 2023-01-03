// Construtores e instâncias

class SpacialStation {
    constructor(name, platformsQuantity){ 
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpacialStation("Observatório"/*name*/, 40/*plataformsQuantity*/) // Chamando o construtor / observatory é o novo SpacialStation

console.log(observatory) // [object object] { "name": Observatório, "plataformsQuantity": 40} 

class Spaceship {
    constructor(name, type="Descoberto"){ //tipo padrão, caso não seja definido
        this.name = name
        this.type= type
    }
}

let Darwin= new Spaceship("Darwin")
let Helmet= new Spaceship("Helmet", "Batalha")

console.log(Darwin) // Darwin, Descoberto
console.log(Helmet) // Helmet, Batalha