const str="string"
str.toUpperCase()
console.log(str)    //result string

/*********************************/

const arr = []
// arr.__proto__    list of constructor
// arr.__proto__.__proto__.     have this method called toString

// 42.toString()    //error message

const num=42
  
console.log(num.toString()) //"42"

Number.prototype.toString=function() {return "100"}
// always return "100" when you call method toString()
// that is very dangerous

console.log(num.toString()) //"100"
console.log(num)    // 42