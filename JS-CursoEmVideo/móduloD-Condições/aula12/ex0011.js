var agora= new Date()
var hora = agora.getHours()
if(hora < 12){
    console.log(`São ${hora} horas. Bom dia !`)
} else if(hora < 18){
    console.log(`São ${hora} horas. Bom tarde !`)
} else{
    console.log(`São ${hora} horas. Bom noite !`)
}