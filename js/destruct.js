// Destructring Assignment

// array
//const mhs = ["halo","mitsuya","21"];
//let [greeting,name,age] = mhs;

//console.log(`${greeting}, my name is ${name} , my age is ${age} years`)

// object
let mhs = {
  name: 'mitsuya',
  age: 31,
  email: 'mitsuya@gmail.com'
}

let {name,age: umur,email} = mhs;
// obkect with function 
function getAge({age}){
  return age;
}
getAge(mhs);