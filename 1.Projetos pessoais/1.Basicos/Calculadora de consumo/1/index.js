let distance = prompt("How far do you want to go?")
let carFuelConsumption = prompt("How many kilometers per liter does your car do?")
let fuelPrice = prompt("How many cost the fuel currently?")

let calc = (distance / carFuelConsumption) * fuelPrice
console.log(calc)

if (fuelPrice < 4) {
    alert("Value below normal")
}
if (fuelPrice >= 4 && fuelPrice <= 5.99) {
    alert("Avarage value")
}
if (fuelPrice > 5.99) {
    alert("High value")
}

alert("Fuel price: "+fuelPrice+"\nCar consumption: "+carFuelConsumption+" km/l"+"\nDistance to go: "+distance+" km/l"+"\nCost: "+"R$ "+calc)

// conflict to resolve: Print gas price status