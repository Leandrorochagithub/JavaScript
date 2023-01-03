//  e (&&): v && v -> true

//console.log(true && true) // true
//console.log(true && false) // false

/*
let ofLegalAge = true
let hasWorkCard= true
console.log(ofLegalAge && hasWorkCard) //true


let ofLegalAge = true
let hasWorkCard= false
let canApply=  ofLegalAge && hasWorkCard
console.log(canApply) // false
*/

// or(||): true se um dos operandos for true

let ofLegalAge = true
let hasWorkCard= false
let canApply=  ofLegalAge || hasWorkCard
console.log('Can apply', canApply) // true

// not(!): true se um dos operandos for true

let rejectedCandidate= !canApply
console.log('Reject candidate', rejectedCandidate) // false

