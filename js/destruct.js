// // Destructring Assignment

// // array
// //const mhs = ["halo","mitsuya","21"];
// //let [greeting,name,age] = mhs;

// //console.log(`${greeting}, my name is ${name} , my age is ${age} years`)

// // object
// let mhs = {
//   name: 'mitsuya',
//   age: 31,
//   email: 'mitsuya@gmail.com'
// }

// let {name,age: umur,email} = mhs;
// // obkect with function 
// function getAge({age}){
//   return age;
// }
// getAge(mhs);

// destructing Function
let calc = (a,b) => {
  return {
    sum: a+b,
    reduce: a-b,
    multiple: a*b,
    divid: {
      name: 'object in object'
    }
  }
}

console.log(result=calc(1,2),result.sum);

function print({divid: {name}}){
  console.log(`this's ${name} `);
}print(result)
