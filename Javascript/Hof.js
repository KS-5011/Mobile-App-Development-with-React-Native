function map(arr,fn){
    const newArr=[]

    arr.forEach(function(val){
        newArr.push(fn(val))
    })
    return newArr
}

// Nếu muốn truyền n phần tử vào 1 hàm thì làm kiểu dưới

const sum=function(){
    // arguments là array like object
    let result=0
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i]
    }
    return result
}

const sum=function(...args){ // Khuyến khích sử dụng kiểu này
    // args là một mảng
    let result=0
    for(let i=0;i<args.length;i++){
        result+=args[i]
    }
    return result
}



function addOne(num){
    return num +1
}

const x = [0,1,2,3]

console.log(map(x,addOne))

console.log(sum(0,1,2))
