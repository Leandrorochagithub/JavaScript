// no construtor, utiliza-se Pascal case, que inicia por maiúsculo

function Cellphone(cellphoneBrand,screenCellphone,cellphoneBatery){
    this.cellphoneBrand=cellphoneBrand, // Essa variável(this.) recebe = valor
    this.screenCellphone=screenCellphone,
    this.cellphoneBatery=cellphoneBatery,
    this.call= function call(){
        console.log("Making the call...")
    }
}
// Para chamar o construtor é necessário usar new nome da função
const cellphone = new Cellphone('Asus',5.5,5.000)
console.log(cellphone)
// CRIA UM OBJETO NOVO E RETORNA