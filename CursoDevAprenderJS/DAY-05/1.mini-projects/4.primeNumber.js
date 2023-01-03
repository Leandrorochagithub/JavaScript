// Criar um função para mostrar os números primos
// Primos: Divisíveris por 1 e ele mesmo, somente. Ex. 11
showPrimeNumbers(15)
function showPrimeNumbers(limit){
    for(let number=2;number<=limit;number++){
        if(primeNumber(number)) console.log(number)
    }
}
function primeNumber(number){
    for(let divisor=2;divisor<number;divisor++){
        if(number % divisor === 0){
            return false
} 
    }
    return true
}

