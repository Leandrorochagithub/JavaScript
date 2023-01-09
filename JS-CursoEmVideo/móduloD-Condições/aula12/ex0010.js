var idade= 71
if(idade < 16){
    console.log(`Voce tem ${idade} anos, você Não vota`)
}else if(idade < 18){
    console.log(`Voce tem ${idade} anos, seu Voto é opcional`)
}else if(idade <= 70){
    console.log(`Voce tem ${idade} anos, seu Voto é obrigatório`)
} else{
    console.log(`Voce tem ${idade} anos, seu Voto é opcional`)
}
