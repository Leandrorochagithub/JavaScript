// Criar um objeto endereço contendo: Rua, Cidade, CEP e exibir por uma função

let adress={
    street: 'Caminho das águas',
    city: 'Brasília-DF',
    cep: '789395-58'
}
/*function showAdress(){
    return adress
} console.log(showAdress())
*/
function showAdress(adress) {
    for (let key in adress)
    console.log(key, adress[key])
}
showAdress(adress)