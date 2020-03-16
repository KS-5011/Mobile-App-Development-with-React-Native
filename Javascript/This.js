const person={
    name: 'Son',
    greet: function(){console.log(this.name)},
}
person.greet()  // Son

const friend={
    name: 'David',
}

friend.greet=person.greet

friend.greet()  // David

this.name='yowon'

//const greet = person.greet    // case 1

const greet = person.greet.bind({name: 'this is a bound object'}) //case 2

// còn có call(), apply()

greet() // case 1: undefined