function doSomething(callback){
    //console.log(callback(1))
    //callback(1)
    setTimeout(function(){callback(1)},1000)

}

doSomething(console.log)