// Se a hora estiver entre 06:00 e 12:00: Bom dia!
// Se a hora estiver entre 12:00 e 18:00: Boa tarde!
// Caso contrário: Boa noite!

/*
if (condição){
    código a ser executado
}
if (outra condição){
    código a ser executado
}
else{
    código a ser executado
}
*/

let hour= 19
    if (hour > 6 && hour <12){
      console.log("Good morning!") 
    }
    else if (hour > 12 && hour < 18){
        console.log("Good afternoon!")
    }
    else{
        console.log("Good nigth")
    }
