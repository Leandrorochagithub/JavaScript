/*const celular={
    cellphoneBrand: 'ASUS',
    screenSize: { 
        horizontal: 155, 
        vertical: 75
    },
    bateryCappacity: 5000,
    call: function(){
        console.log('Making the call...')
    }
}*/
// Factory function
function createCellphone(cellphoneBrand,screenSize,bateryCappacity){
    return{
        // se os nomes forem iguaisn não é necessário identificá-lo (cellphoneBrand: cellphoneBrand')
        cellphoneBrand,
        screenSize,
        bateryCappacity,
        call(){ // não é necessário dizer que é um função
            console.log('Making the call...')
        }
    }
}
const cellphone1= createCellphone('Asus',5.5,5.000)
console.log(cellphone1)

// RETORNA UM OBJETO NOVO