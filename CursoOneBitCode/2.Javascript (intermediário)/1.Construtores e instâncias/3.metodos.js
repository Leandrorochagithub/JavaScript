// Métodos

class Formula {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration) { // Meu método
        this.velocity += acceleration
    }
}
let piloto0= new Formula("Michael Shumacher")
console.log(piloto0) // name: "Michael Shumacher", velocity: 0

let Piloto1 = new Formula("Lewis Hamilton")
Piloto1.speedUp(150)
Piloto1.speedUp(100)

let Piloto2 = new Formula("Max Verstappen")
Piloto2.speedUp(100)
Piloto2.speedUp(100)

console.log(Piloto1) // name: "Lewis Hamilton", velocity: 250 (100+150)
console.log(Piloto2) // name: "Max Verstappen", velocity: 200 (100+100)