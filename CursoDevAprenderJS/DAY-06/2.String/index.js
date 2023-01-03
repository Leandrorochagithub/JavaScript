// Tipo primitivo
var message = "Minha primeira mensagem     "
// Tipo objeto
var otherMessage= new String('Bom dia!') // tem propriedades de objeto
console.log(otherMessage.length) //2
console.log(otherMessage[2]) // m
console.log(message.includes('primeira')) // true
console.log(otherMessage.includes('preto')) // false
console.log(message.endsWith('Minha')) // false
console.log(message.startsWith('Minha')) // true
console.log(message.replace('Minha', 'Sua')) // Sua primeira mensagem
console.log(message.split(' ')) // [ 'Minha', 'primeira', 'mensagem', '', '', '', '', '' ] separando pot ' ' existentes 
