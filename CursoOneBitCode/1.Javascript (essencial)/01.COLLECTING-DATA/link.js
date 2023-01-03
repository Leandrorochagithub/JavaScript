/*Show with prompt the welcome message: "Welcome! Then we will ask you to enter some data"*/
let WelcomeMessage = confirm('Bem-vindo! Agora nós pediremos que nos informe alguns dados\n(Welcome! Then we will ask you to enter some data)')
console.log(WelcomeMessage) /* -> (ok)True or (ok)False*/

/*Ask the user inform your name, age and confirm your age*/
let userName = prompt ('Qual é o seu nome?\n(What is your name?)')
console.log(userName) /*Windows with message field(campo)*/

let userAge = prompt ('Qual a sua idade?\n(What is your age?)')
console.log(userAge)

let ageConfirmation = confirm ('Sua idade é '+ userAge +'?\nYour age is ' + userAge + ' years old?')
console.log(ageConfirmation) /*Windows with message field(campo)*/

/*alert('Nome (name) = ' + userName)
alert('Idade (age) = ' + userAge)
alert('Confirmação (confirmation) = ' + ageConfirmation) /*or*/

alert('Nome (name) = ' + userName + '\nIdade (age) = ' + userAge + '\nConfirmação (confirmation) = ' + ageConfirmation)
/* \n = line break, like <br> in html */

