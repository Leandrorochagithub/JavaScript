var atual= new Date()
var diasem= atual.getDay()

switch (diasem){
    case 0: 
    console.log("Domingo(Sunday)")
    break
    case 1: 
    console.log("Segunda-feira(Monday)")
    break
    case 2: 
    console.log("Terça-feira(Tuesday)")
    break
    case 3: 
    console.log("Quarta-feira(Wednesday)")
    break
    case 4: 
    console.log("Quinta-feira(Thuesday)")
    break
    case 5: 
    console.log("Sexta-feira(Friday)")
    break
    case 6: 
    console.log("Sábado(Saturday)")
    break

    default: "[ERROR] Dia inválido!"
}