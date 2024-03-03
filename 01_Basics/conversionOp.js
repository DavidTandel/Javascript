let score = false
console.log(typeof score);
console.log(typeof (score));

let valueInnumber = Number(score)
console.log(typeof valueInnumber);
console.log(valueInnumber);

// Conertion is not done string to number give NaN
// undefined also give NaN
// null gives 0


// "33"->33
// "33abc"->NaN
// null->0
// undefined->NaN
// true->1;false->0

let isloggedIn = -1

let booleanisloggedIn = Boolean(isloggedIn)
console.log(booleanisloggedIn);

// 0->false; anyother->true
// ""->false; ow->true

let someNumber = 33
let stringsomeNumber = String(someNumber)

console.log(typeof stringsomeNumber);