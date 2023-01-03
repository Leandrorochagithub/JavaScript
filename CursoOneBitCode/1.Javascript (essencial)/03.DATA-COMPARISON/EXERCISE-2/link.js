// MOMENT = DATE MANIPULATION LIBRARY

alert('Neste exercício vamos converter uma data inserida por você em outra unidade de tempo (segundos, minutos, horas ou dias). vamos fazer!')
let departureDateEntry = prompt("Insira a data de partida (formato DD/MM/AAAA)")

let departureDate = moment(departureDateEntry,"DD/MM/AAAA") // TO TRANSFORM THE DATA IN DATE FORMAT

let today = moment() // () RETURN ATUAL DATE

let dateDiff = today - departureDate // DIFF = DIFERENÇA

let chosenOption = prompt("Escolha como deseja exibir o horário de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == "1"){
    let secondsOfDeparture = Math.round(dateDiff / 1000) // MATH.ROUND = ROUND(arredondar) RESULT
    alert("Hora do voo: " + secondsOfDeparture + "Segundos")
} else if (chosenOption == "2"){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert("Hora do voo: " + minutesOfDeparture + "minutos")
} else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert("Hora do voo: " + hoursOfDeparture + "horas")
} else if (chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Hora do voo: " + daysOfDeparture + "dias")  
} else {
    alert("Opção inválida") // IF IT IS NOT ANY OF THE OPTIONS, ALERT 'INVALID OPTION'
}