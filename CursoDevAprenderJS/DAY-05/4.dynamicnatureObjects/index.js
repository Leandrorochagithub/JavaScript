const mouse={
    color: 'Black',
    brand: "Dazz"
}
// o dinamismo me permite acrescer novas vairáveis e funções
mouse.velocity= 5000
mouse.switchDPI= function(){
    console.log("Swicthing DPI")
}
delete mouse.velocity // Deleta velocity
delete mouse.switchDPI // Deleta a função
console.log(mouse)