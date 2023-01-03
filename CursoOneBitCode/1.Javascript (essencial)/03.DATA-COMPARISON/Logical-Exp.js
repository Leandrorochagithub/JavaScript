/*
AND - && (V/V=F V/F=F)
OR - || (V/V or V/F=V F/F=F)
NOT ! (DENIAL OF DATA IN PARENTHESES)
IF...THEN
IF ONLY IF
*/

let spaceship = "Elemental"
let velocity = 20
console.log(spaceship.length == 9 && velocity == 20) /*V/V TRUE*/

console.log(spaceship.length >= 9 || velocity > 20) /*V/F TRUE*/

console.log(spaceship == 'Golias' || velocity < 17) /*F/F TRUE*/

console.log(!(spaceship == 'Golias' || velocity < 17)) /*V/V TRUE*/

console.log(!(velocity > 25 && spaceship == 'elemental') || (velocity - 3 == 17 && spaceship.length + 1 == 15)) 
/*
!(F/V) || (V/F)
!(F) || (F)
V || F
V
*/