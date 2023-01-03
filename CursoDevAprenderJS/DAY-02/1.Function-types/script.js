// Realizar uma tarefa e não devolver nada 
// Função sem parâmetros, que recebe no console o seu valor
// Function nome (parâmetros){Abertura}

function sayName(){
    console.log('Lionel')
}
sayName() // Chamando função

// Faz um cálculo ou operação e devolver algo

function MultiplyBy2(value){ 
    return value* 2 // Retronando a função de parâmetro value, multiplicando por 2
}
console.log(MultiplyBy2(5)) // Chamando a função e atribuindo um valor a ela(5=value)

//  Atribuindo a função a uma variável

let result = MultiplyBy2(15)
console.log(result)

