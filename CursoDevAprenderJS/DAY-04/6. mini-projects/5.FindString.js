// Criar um método para ler propriedades de um objeto
// Exibir somente as do tipo string

let movie={
    title: 'Avengers',
    year: 2010,
    director: 'Robin',
    character: 'Thor'
}
showProperties(movie)
function showProperties(object){
for (property in object)
    if (typeof object[property] ===  'string')
console.log(property, object[property]) // title (propriedade) Avengers (objeto dentro da propriedade title)
}