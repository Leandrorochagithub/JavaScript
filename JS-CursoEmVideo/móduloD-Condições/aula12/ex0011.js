var agora= new Date() // Data atual
var hora = agora.getHours() // Hora atual do dia atual(var agora)
var min= agora.getMinutes()
//Usando Operador ternário
hora < 12 ? console.log(`São ${hora} horas e ${min} min. Bom dia !`) : hora < 18 ? console.log(`São ${hora} horas. Bom tarde !`) :     console.log(`São ${hora} horas. Bom noite !`)

/*if(hora < 12){
    console.log(`São ${hora} horas. Bom dia !`)
} else if(hora < 18){
    console.log(`São ${hora} horas. Bom tarde !`)
} else{
    console.log(`São ${hora} horas. Bom noite !`)
}
*/
