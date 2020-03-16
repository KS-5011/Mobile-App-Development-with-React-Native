// Nested Function
// Trong js có thể lồng 1 hàm bên trong 1 hàm khác
// Tất cả biến và đối số từ hàm cha(outner function) đều đc kế thừa
//từ hàm con(inner function)
// Kiểu kế thừa

function outsideFunction(a){
    function insideFunction(b){
        return a+b
    }
    return insideFunction
}

console.log(outsideFunction(1)(4))  //result 5

/************************************************************/

// Closure là một hàm khai báo bên trong 1 hàm khác
// Có 2 dạng: Function Factory
//            Variable Visibility
         
function makeHelloFunction(){
    // Bên trong hàm makeHelloFunction gọi là Lexical Environment
    
    var message = "Hello"

    function sayHello(){
        console.log(message)
    }
    return sayHello// Khi return sẽ không mất biến message
    // Biến message đc gửi kèm sayHello dưới dạng reference
}
const sayHello = makeHelloFunction()

console.log('type of message: ',typeof message)
console.log(sayHello.toString())

sayHello()

