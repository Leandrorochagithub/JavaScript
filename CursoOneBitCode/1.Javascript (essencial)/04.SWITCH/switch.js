// CASO = CASO | BREAK= PARAR
// TO FIND COMPATIBLE RESULT WITH SWITCH (80*2 = 160)

let velocity = 100;

switch (velocity * 2) {
    case 100:
        console.log("your speed is 100 km/s");
        break;
    case 160:
        console.log("your speed is 160 km/s");
        break;
    default:
        console.log("Identified speed");
}

let spaceship = 'Elemental';

switch ('Elemental') {
    case 'Golias':
        console.log("fastest spaceship");
        break;
    case 'Raptor':
        console.log('stronger spaceship');
        break;
    default:
        console.log("Identified spaceship");
}
// WHEN THE SWITCH FIND THE CODE, IT KEEPS RUNNING THE CODES UNTIL IT FINDS THE INTERRUPTION (BREAK) AND PRINT OUT EVERY CONSOLES AFTER RIGHT CODE UNTIL FIND BREAK
let velocity = 90;

switch (velocity) {
    case 80:
    case 90:
    case 100:
        console.log("speed too high, bue acceptable");
        break
    case 110:
        console.log("speed too high, reduce");
    default:
        console.log("Identified speed");
}

let spaceship = "Elemental"

switch ("Elemental") {
    case "Golias":
        console.log("fastest spaceship")
    case "Raptor":
        console.log("stronger spaceship")
        break // DON'T STOPPED BECAUSE IT'S NOT 'Raptor'
    case "Elemental":
        console.log("spaceship with better armament")
    // DON'T STOPPED BECAUSE DONT'T HAVE A BREAK
    case "Frontier":
        console.log("infantry spaceship")
    case "Enterprise":
        console.log("Star fleet")
        break
    default:
        console.log("Identified spaceship")
}

/* RESULT
DON'T PRINT OUT CASES BEFORE THE RIGHT CODE (ELEMENTAL)
"spaceship with better armament"
"infantry spaceship"
"Star fleet"
*/