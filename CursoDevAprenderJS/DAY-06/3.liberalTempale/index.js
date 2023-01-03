//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/escape
// São métodos de escape manual
//\n para querba de linha e \\ para poder inclir aspas
var message= 'oi, essa é minha\n \' primeira\' mensagem'
console.log(message)

//ES6 trouxe uma maneira mais simples e objetiva
// Usando template (` `)
// usando ${nome da variável} é possível incluir uma variável no meio da String ou até uma preção matemática
var name= "Lionel"
var message= `Oi, ${name} ${5+5} !
Essa é minha primeira mensagem`
console.log(message)