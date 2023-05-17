// Asynchronous is you can next task without waiting previous task done

// callback
// function hallo(name){
//   alert(`Hello ${name}`)
// }

// function print(str){
//   name = prompt("what's your name")
//   setTimeout(() => str(name), 10000);
//   //str(name)
// }

// console.log("start")
// console.log(print(hallo))
// console.log("end")


let mhs = `{
  "name": "mitsuya",
  "age": "21",
  "email": "mitsuyatakashi0012@gmail.com"}`;
console.log(mhs, typeof(mhs))
let mhsObj= JSON.parse(mhs); // String to Object
console.log(mhsObj,typeof(mhsObj))

let mhs_Str = JSON.stringify(mhsObj); // Obiect to String
console.log(mhs_Str,typeof(mhs_Str))