function printOne(){
    console.log('one')
}
function printTwo(){
    console.log('Two')
}
function printThree(){
    console.log('Three')
}

// printOne()
// printTwo()
// printThree()

setTimeout(printOne,1000)
setTimeout(printTwo,0)
setTimeout(printThree,100)
// two
// three
// one