const o = new Object()
o.firstName='Khanh'
o.lastName='Son'
o.isStudent = true
o.greet=function() {
    console.log('hi!')
}

const o2={}
o2.firstName='Khanh'
o2['lastName']='Son'
const key='isStudent'
o2[key]=true
o2['greet']=function() {
    console.log('hi!')
}

const o3={
    1:'test',// o3[1] or o3["1"] chỉ có thể gọi kiểu này
    firstName:'Khanh',
    lastName:'Son',
    isStudent:true,
    greet:function() {
        console.log('hi!')
    },
    address:{
        street:'Ta Quang Buu',
        number:123//o3.address.number or o3.address["number"]
    }
}
