// Receber uma quantidade de valores
// Fazer uma função que exiba se o valor é par ou ímpar

showType(3);
function showType(limit) {
  for (let i = 0; i <= limit; i++) { //Para (let 1 incial = 0; se i <= limit(3);incremente +1 até chegar ao limit(3))
    if (i % 2 === 0) // Quando o resto da divisão for = 0
    console.log(i, "PAR");
    else 
    console.log(i, "ÍMPAR"); // Quando o resto da divisão for != 0
  }
}
