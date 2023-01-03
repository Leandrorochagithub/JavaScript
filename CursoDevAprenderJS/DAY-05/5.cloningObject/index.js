const mouse={
    color: 'Black',
    brand: "Dazz"
}
//  Object.assign({dado a ser inserido}, na variável x)
const newObject= Object.assign({batery: 5000}, mouse)
console.log(newObject)
// utilizando spred para clonar
const Object2 = {...newObject}
console.log(Object2)