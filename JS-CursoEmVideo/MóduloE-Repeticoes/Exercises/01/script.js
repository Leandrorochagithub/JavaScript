function contar(){
    var inicio= document.getElementById('inicio').value
    var fim= document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    let result= document.getElementById('result')
    
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('[ERROR] Faltam dados !')
    } else{
        result.innerHTML =  `Contando: `
        let i= Number(inicio) 
        let f= Number(fim)
        let p= Number(passo)

        if (passo <= 0){
            alert ("Passo inválido! Considerando PASSO 1")
            p = 1
        }

        if(i < f){
// Contagem crescente
        for(let c = i; c <= f; c += p){
            result.innerHTML += `${c} \u{1F449}`
         }
        } else{
            // Contagem regressiva
            for(let c= i; c>= f; c -= p){
                result.innerHTML += `${c}  \u{1F449}`
            }
        }           
         result.innerHTML += ` \u{1F3C1}` 
        }
    }
 