let spaceship{ /* open {objects}*/
    name: "Fênix",
    crew: 7,
    type: "Batalha"
}
console.log(spaceship) /*   
object{
name: "Fênix",
crew: 7,
type: "Batalha"  
}
*/
console.log(spaceship.crew)/* specific object
7
---------------------------------------*/
// Add objects
spaceship.isHitched= "False"
// or spaceship["isHitched"]= "False"
//-------------------------------------------------------------------------------
//it's possible to leave the property empty and add variable like this:
let spaceship{}
// or let spaceship= new object{} 
spaceship.name: "Fênix"
spaceship.crew: 7
spaceship.type: "Batalha"
//-------------------------------------------------
let spaceship{ /* open {objects}*/
    2: "Fênix",
    crew quantity: 7,
}
console.log(spaceship.2) // NO
// console.log(spaceship['2']) // YES
console.log(spaceship['crew quantity'])


