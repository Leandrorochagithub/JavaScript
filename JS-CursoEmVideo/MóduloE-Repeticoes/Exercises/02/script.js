function gerar(){
    let number= document.getElementById('number').value
    let result= document.getElementById('selectTabuada')
    /* Não podemos aceitar o quadro em branco*/
    if(number.length == 0){
        alert('Por favor, digite um numero!')

    } else {
        let n= Number(number) // = valor digitado pelo usuário
        let c =1 // var para um contador inicial
        result.innerHTML= ' ' // Para limpar a tabuada ao trocar n
        while(c<=10){
            /* Criação manual de um select html no js*/
            let item = document.createElement('option')  /* Opções do select*/
            item.text= `${n} x ${c} = ${n*c}` /* Conteúdo das linhas do select*/
            item.value= `result ${c}` /*Possibilita selecionar as linhas com os intens*/ 
           result.appendChild(item) // Acrescentar item
            c ++ // Percorrer até 10
        }
    }
}
