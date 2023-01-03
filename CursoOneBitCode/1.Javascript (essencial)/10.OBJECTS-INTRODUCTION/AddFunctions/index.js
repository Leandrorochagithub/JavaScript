let spaceship= {
    name: "Deméter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function(){
        alert('Preparando')
        alert('Ligando')
    }
}
spaceship.turnOn() // 'Preparando' e 'Ligando'

// Add another atributes

spaceship.velocity= 0
spaceship.speedUp= function(acceleration){
    this.velocity += acceleration // This property to call property of object itself (Return velocity from spaceship)
}
console.log(spaceship) // Return spaceship and the function with velocity add= 0
spaceship.speedUp(10) // acceleration= 10 
console.log(spaceship) // Return spaceship and the function with velocity add= 10
console.log(this.name) // 'Deméter'