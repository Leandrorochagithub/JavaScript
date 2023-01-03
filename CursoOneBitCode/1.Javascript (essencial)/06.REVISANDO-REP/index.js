let nomeNave= prompt("Qual o nome da nave?")
let nomeInvertido= ""

// s u p e r n o v a  
// 0 1 2 3 4 5 6 7 8
// nomeNave.length -1 = avonrepus

for(let i= nomeNave.length -1; i>= 0; i--){
if(nomeNave[i]== "e"){
    break
} 
else{
nomeInvertido += nomeNave[i]
}
}
alert("Nome original da nave: "+nomeNave+"\nNome invertido: "+nomeInvertido)