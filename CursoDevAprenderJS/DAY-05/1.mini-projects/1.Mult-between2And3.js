// Criar uma função soma que retorne a soma de todos os múltiplos de 3 e 5
//Armazenar os múltiplos de 3 e de 5
//somar os dois

sum(10);
function sum(limit) { // Estou dizendo que a função sum, que tem como declarado o valor 10, é o limite
  let multBy3 = 0; // declarabdo os múltiplos
  let multBy5 = 0;
  for (let i = 0; i <= limit; ++ i) {
    if (i % 3 === 0) multBy3 += i; // multBy3 + o proximo multBy3 verificado como verdadeiro
    if (i % 5 === 0) multBy5 += i;
  }
  console.log(multBy3+multBy5);
}
