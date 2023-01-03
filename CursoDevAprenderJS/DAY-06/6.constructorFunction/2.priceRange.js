// Criar um array de objetos de faixa de preço

// Opção 1
/*
 let priceRange = [
    {toolTip: `Até 500 reais: `, min: 0, max: 500},
    {toolTip: `De 500 reais até 1000 reais: `, min: 500, max: 1000},
    {toolTip: `1000 reais ou mais:`, min: 1000, max: 9999},
 ];
 console.log(priceRange)*/

/* Opção 2 Factory function
function priceRange(tooltip, min, max){
   return{tooltip, min, max}
}
let showPriceRange=[
    priceRange(`Até 500 reais: `,0,500),
    priceRange(`De 500 reais até 1000 reaiss: `,500,1000),
    priceRange(`1000 reais ou mais: `,1000,9999),
]*/
// console.log(showPriceRange)
// Opção 3 - Constructor 
function showPriceRange(tooltip, min, max){
   this.tooltip= tooltip,
   this.min= min,
   this.max= max
}
let show = [
   new showPriceRange(`Até 500 reais: `,0,500),
   new showPriceRange(`De 500 reais até 1000 reaiss: `,500,1000), 
   new showPriceRange(`1000 reais ou mais: `,1000,9999)
]

console.log(show)



