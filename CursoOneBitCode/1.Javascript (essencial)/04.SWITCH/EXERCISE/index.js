
let caution = alert('Welcome to Light-years distance convert!\n\nClick OK to continue')
let distance = prompt("What is the distance in light years you would like to calculate (Type number type)?")

let chosenOptions = prompt('Chose the convertion unit:\n1. Persec(pc)\n2. astrominoid unit(au)\n3. kilometers(km)\n\n(Type the choice number)')

//  Math.pow calculate potentiation
let chosenUnity
switch (chosenOptions) {
    case '1':
        chosenUnity = "Parsec" /*To final alert shows the name*/ 
        convertedDistance = distance * 0.306601
        alert('Your distance in Persec is: ' + convertedDistance + ' Persec')
        break
    case '2':
        chosenUnity = "Astrominoid unit"
        convertedDistance = distance * 63241.1
        alert('Your distance in astrominoid unit is: ' + convertedDistance + ' astrominoid unit')
        break
    case '3': 
    chosenUnity = "Kilometers" 
        convertedDistance = distance * 9.5 * Math.pow(10, 12)
        alert('Your distance in Kilometers is: ' + convertedDistance + ' Kilometers')
        break
    default:
        alert('Out of scope conversion')
}
alert("Light Years distance: " + distance + "\nConversion unit: " + chosenUnity)