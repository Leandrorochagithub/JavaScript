// criar dois objetos endereço e comparar se eles têm informações iguais

function adress(street,city,cep){
    this.street= street,
    this.city= city,
    this.cep= cep
}
//console.log(new adress('Pedra bonita','Rio de janeiro-RJ', '798696-23'))

function adress2(street,city,cep){
    this.street= street,
    this.city= city,
    this.cep= cep
}
//console.log(new adress2('Pedra bonita','Juazeiro-RN', '846268-84'))

function findEquality(adress,adress2){
    return adress.street === adress2.street
    && adress.city === adress2.city
    && adress.cep === adress2.cep
}
console.log(findEquality(adress,adress2))

function haveSameAddressMemory(adress,adress2){
    return adress === adress2
}
console.log(haveSameAddressMemory(adress,adress2))