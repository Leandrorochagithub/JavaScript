//For-in
 const people= {
    firstName: 'Lionel',
    age: 35
 }
 // for( let chave in valor) chave(propriedade), valor(objeto)
for(let i in people){
    console.log(i, people['firstName']) //  console.log(i, people,firstName) // 
}

const colors = ['Red', 'Blue', 'Green'] 
for (let i in colors){
console.log(i, colors[0])
}