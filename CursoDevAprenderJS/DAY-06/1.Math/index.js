// São muitas funcionalidades. Pesquisar em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

var maxNumber= 
Math.max(3,6,8,10)
console.log(maxNumber)

var minNumber= 
Math.min(3,6,8,10)
console.log(minNumber)

var aleatoryNumbers= 
Math.random()
console.log(aleatoryNumbers)

// Gerando números aleatórios entre dois números
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  var arbitrary = getRandomArbitrary(10,20)
  console.log(arbitrary)
  