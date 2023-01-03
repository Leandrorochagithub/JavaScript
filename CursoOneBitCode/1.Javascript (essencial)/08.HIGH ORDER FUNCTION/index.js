let velocity = 150 //VARIÁVEL velocity = 150

const speedUp = (velocity, mensagem) => { // Variável SpeedUp recebe os parâmetros velocity e mensagem (=> é o mesmo que "return" na ARROW FUNCTION)
    
    velocity += 20 // += "x += y -> x = x+y". Logo, velocity += 20 -> 150+20= 170
    
    mensagem(velocity) // Mensagem = operação realizada acima (170)
    
    return velocity // console.log de speedUp
}

const mensagem = (velocity) => { // 1
    console.log("A velocidade atual é de " + velocity + " km/s")
}

let result = speedUp(velocity, mensagem) // 2
console.log(result)

// 1 |"A velocidade atual é de 170 km/s" 

// 2 |170

/*Resumo do que vamos ver
Funções como variáveis (funções anônimas)
Revisão de arrow functions
Funções como parâmetros (high-order functions)
Exemplo Array.prototype.filter()
Comparação com for
Utilização do .filter()
Separação de funções
Passo a passo
Em javascript (e outras linguagens) podemos escrever funções como valores e atribuir à variáveis utilizando funções anônimas:*/

function greet(name) { 
	return `Hello, ${name}!`
}

const greet = function (name) {
	return `Hello, ${name}!`
}

const foo = greet

console.log(greet('John'))
console.log(foo('bar'))

// Também podemos escrever as funções anônimas através de arrow functions:

function greet(name) {
	return `Hello, ${name}!`
}

const greet = (name) => {
  return `Hello, ${name}!`
}

const greet = name => `Hello, ${name}`

const foo = greet

console.log(greet('John'))
console.log(foo('bar'))

//Também podemos passar funções como parâmetros para outras funções, chamadas high-order functions:


function greet(name) {
	return `Hello, ${name}!`
}

function speakToMary(dialog) {
	const text = dialog('Mary')
	return `He says "${text}"`
}

console.log(speakToMary(greet))

// Vamos exemplificar através da função Array.prototype.filter():

const characters = [
	{ name: 'Frodo', race: 'Hobbit' },
	{ name: 'Sam', race: 'Hobbit' },
	{ name: 'Aragorn', race: 'Man' },
	{ name: 'Legolas', race: 'Elf' },
	{ name: 'Gimli', race: 'Dwarf' },
	{ name: 'Boromir', race: 'Man' },
	{ name: 'Merry', race: 'Hobbit' },
	{ name: 'Pippin', race: 'Hobbit' },
	{ name: 'Gandalf', race: 'Ainur' },
]

// Retorna todos os Race = Hobbit e seu nome 
const hobbits = []

for (let i = 0; i < characters.length; i++) {
  if (characters[i].race === 'Hobbit') {
    hobbits.push(characters[i])
  }
}

// Vejamos como podemos obter o mesmo resultado com menos código:
// Filtrar usando a função character, que retorna character que tenha race = Hobbit
const hobbits = characters.filter(function (character) {
  return character.race === 'Hobbit'
})

//Ainda podemos utilizar as arrow functions para deixar o código ainda mais legível:

const hobbits = characters.filter(character => character.race === 'Hobbit')

// E por fim ainda podemos separar as funções:

const isHobbit = character => character.race === 'Hobbit'

const hobbits = characters.filter(isHobbit) 
