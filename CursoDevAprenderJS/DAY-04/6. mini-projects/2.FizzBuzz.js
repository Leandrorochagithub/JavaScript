/*
Divisível por 3 => Fizz
Divisível por 5 => Buzz
Divisível por 3 e  5 => FizzBuzz
Não Divisível por 3 ou 5=> Entrada
Divisível é um número => "Não é um número"
*/

const result = fizzBuzz(15);
console.log(result);

function fizzBuzz(entrance) {
  if (typeof entrance !== "number") return "It is not a number";
  if (entrance % 3 === 0 && entrance % 5 === 0) return "FizzBuzz"; // Deve vir primeiro, pois ao achar o resultado, a busca cessa.
  if (entrance % 3 === 0) // % 3 = Divisível por 3
    return "Fizz";
  if (entrance % 5 === 0) return "Buzz";
  
  return entrance;
}
