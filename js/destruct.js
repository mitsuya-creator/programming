// // // Destructring Assignment

// // // array
// // //const mhs = ["halo","mitsuya","21"];
// // //let [greeting,name,age] = mhs;

// // //console.log(`${greeting}, my name is ${name} , my age is ${age} years`)

// // // object
// // let mhs = {
// //   name: 'mitsuya',
// //   age: 31,
// //   email: 'mitsuya@gmail.com'
// // }

// // let {name,age: umur,email} = mhs;
// // // obkect with function 
// // function getAge({age}){
// //   return age;
// // }
// // getAge(mhs);

// // destructing Function
// let calc = (a,b) => {
//   return {
//     sum: a+b,
//     reduce: a-b,
//     multiple: a*b,
//     divid: {
//       name: 'object in object'
//     }
//   }
// }

// console.log(result=calc(1,2),result.sum);

// function print({divid: {name}}){
//   console.log(`this's ${name} `);
// }print(result)


// CREATE NEW OBJECT
console.log(createObj,TemplateObj,print);
function createObj(){
  let nameObj = prompt('name object');
  let fullName = prompt('What\'s your name:');
  let age = prompt('how old you');
  let email = prompt('your Email address');
  return this[nameObj] = new TemplateObj(fullName,age,email);
}

//TRMPLATE OBJ
function TemplateObj(name,age,email){
  this.name = name;
  this.age = age;
  this.email = email;
}

//PRINT OBJECT 
function print({name,age,email}){
  console.log(`Hello myname is ${name} , my age ${age} and you can contact me at ${email}`);
}