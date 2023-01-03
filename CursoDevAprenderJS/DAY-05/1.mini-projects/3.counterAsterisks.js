// Criar uma função que exiba a quantidade de asteriscos que cada linha possui

countAsterisk(10)
function countAsterisk(limit){
   let row= ' ' // Declaração vazia para que possa ter um valor incremental posteriormente
    for(let i=0;i<=limit;i++){
            row += "*"
            console.log(row)
        }
    }