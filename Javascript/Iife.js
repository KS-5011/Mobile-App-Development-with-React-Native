// Immediately Invoked Function Expression
// Khởi tạo 1 function và thực thi nó ngay lập tức
// IIFE như 1 cái hộp và đóng gói chính nó
// Những biến trong này là private 
// Bên ngoài(global) không thể truy xuất hay thay đổi đc
// Nếu đặt tên biến bị trùng cũng ko sao


const sayHello = (function (){
    var message = "Hello"

    function sayHello(){
        console.log(message)
    } 
    return sayHello
})()

//console.log('type of message: ',typeof message)   // undefined
//console.log(sayHello.toString())  

//sayHello()    //result Hello

const counter=(function(){
    let count=0
    return{
        inc:function(){count=count+1},
        get:function(){console.log(count)},
    }
})()

counter.get()   //0
counter.inc()
counter.get()   //1


