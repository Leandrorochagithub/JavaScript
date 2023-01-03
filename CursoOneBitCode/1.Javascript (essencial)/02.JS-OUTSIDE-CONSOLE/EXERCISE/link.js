alert('Olá, neste exercício vamos calcular a diferença de idade entre dois de seus amigos. Aqui vamos nós!\n\nHello, in this exercise we are going to calculate the age difference between two of your friends. Here we go!')
let WelcomeMessage = confirm('Bem-vindo! Neste exercício, pediremos que você insira alguns dados\n\nWelcome! In this exercise we will ask you to enter some data')
console.log(WelcomeMessage)

let userName =prompt('Por favor, diga-nos o seu nome\n\nPlease, tell us your name')

let olderFriend =prompt('Por favor, '+userName+' , diga-nos o nome do seu amigo(a) mais velho(a)\n\nPlease, '+userName+' , tell us the name of your older friend')
let ageOlderFriend =prompt('(Por favor, '+userName+' , diga-nos a idade do seu amigo(a) mais novo(a)\n\nPlease, '+userName+' ,tell us the age of your older Friend')

let youngerFriend =prompt('Por favor, '+userName+' , diga-nos o nome do seu amigo(a) mais novo(a)\n\nPlease, '+userName+', tell us the name of your younger Friend')
let ageYoungerFriend =prompt('Por favor, '+userName+' , diga-nos a idade do seu amigo(a) mais novo(a)\n\nPlease, '+userName+', tell us the age of your younger Friend')

let calcAges = ageOlderFriend-ageYoungerFriend

alert(userName +' , este é o seu resultado:' + '\nO nome do seu amigo(a) mais velho(a) é ' +olderFriend+ ' e ele(a) tem ' +ageOlderFriend+' anos' +
'\nO nome do seu amigo(a) mais novo(a) é ' +youngerFriend+ ' e ele(a) tem ' +ageYoungerFriend+' anos' +
'\nA diferença entre suas idades é '+calcAges+'.'+

'\n\n'+userName + ', this is your result:' + '\nyour oldest friends name is  ' +olderFriend+ ' and he/she have ' +ageOlderFriend+' years old' +
'\nyour youngest friends name is ' +youngerFriend+ ' and he/she have ' +ageYoungerFriend+' years old' +
'\nThe difference between their ages is '+calcAges+'.')

