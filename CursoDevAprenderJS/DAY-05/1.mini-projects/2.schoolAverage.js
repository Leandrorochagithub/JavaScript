// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

let array = [70, 85, 55]; // Meu array
function studentAverage(array) {
  // Função para somar e tirar a média
  let sum = 0;
  for (let value of array) {
    sum += value;
  } // Loop for..of para percorrer os elementos do array e somar(0 ao 2)
  let average = sum / array.length; // soma / array.length para dividir pelo número de elementos do array
  if (average < 59) return "F";
  if (average < 69) return "D";
  if (average < 79) return "C";
  if (average < 89) return "B";
  return " A";
}
console.log(studentAverage(array));
