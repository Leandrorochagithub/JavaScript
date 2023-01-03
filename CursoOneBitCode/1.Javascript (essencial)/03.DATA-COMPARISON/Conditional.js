// IF = SE, ELSE = SENÃO
let Velocity = 110
if (Velocity < 100) {
    console.log('We are at an acceptable speed')
}
else {
    console.log('Entering a risk zone')
}

let Velocity = 100
if (Velocity < 40){  
    console.log('Very low speed') /*ok --> Print out, no ok, next*/
}
else if (Velocity <= 100) {
    console.log('Caution! Close to risk speed') /*ok --> Print out, no ok, next*/
}
else {
    console.log('Risk speed') /*ok --> Print out*/
}
/* TERNARY OPERATOR or ONE LINE IF | IF BEFORE ? IS TRUE, RETURN WHAT IS BETWEEN ? AND :, ELSE RETURN WHAT IS AFTER :*/ 

let Velocity = 100
(Velocity > 100) ? console.log('Velocity bigger then 100') : console.log('Velocity less then 100')