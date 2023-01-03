// Colocando Arrays dentro de Objects
const spaceship = { /* OBJECT */
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Júlia", "Thiago"], /* ARRAY */
    captain: { /* OBJECT*/
        name: "Cap. Hugo Torent",
        age: 27
    }
}

console.log(spaceship) /*RETURN ALL DATA*/
console.log(spaceship.captain.name) /*RETURN "Cap. Hugo Torent"*/
//----------------------------------------------------------------------------------------
spaceship.crew.push("Ten. Almeida") /*ADD IN CREW THE NAME "Ten. Almeida"*/
console.log(spaceship)
//--------------------------------------------------------------------------------------
const spaceshipUpper = spaceship.crew.map((elemento) => {
    return elemento.toUpperCase()
}).join(", ") /*MAP EACH ELEMENT FROM CREW AND JOIN IT TO ","*/
console.log(spaceshipUpper)
//-------------------------------------------------------------------------------------
const spaceshipFindIndex = spaceship.crew.findIndex((elemento) => {
    return elemento == "Ana Júlia"
})
console.log(spaceshipFindIndex)/*RETURN INDEX TO "Ana Júlia"[1]*/
//------------------------------------------------------------------------------------------
const spaceshipFind = spaceship.crew.find((elemento) => {
    return elemento
})
console.log(spaceshipFind) 

const spaceshipFilter = spaceship.crew.filter((elemento) => {
    return elemento.length <= 6
})
console.log(spaceshipFilter)/*RETURN ["Thiago"]*/

// Colocando Objects dentro de Arrays
const spaceship2 = [
    { name: "Elemental", crewQuantity: 10 },
    { name: "Colossus", crewQuantity: 8 },
    { name: "Helmet", crewQuantity: 15 }
]

console.log(spaceship2)/*ALL*/
console.log(spaceship2[0].name)/*Elemental"*/
console.log(spaceship2[0].crewQuantity)/*10*/