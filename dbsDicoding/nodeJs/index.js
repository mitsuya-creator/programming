//const {mhs,mhs1}= require('./mhs'); // import full module

// let arrMhs = [mhs,mhs1];
// for(mArr of arrMhs){
//   for(mObj in mArr){
//     console.log(`${mObj}: ${mArr[mObj]}`)
//   }
// }

import {mhs as mitsuya} from "./mhs.js"; // import one variable of module
// let loop = (m) => console.log(m)

// loop(mitsuya)


// TRY catch
try{
  console.log("object mitsuya")
  //errorcode;
  console.log(mitsuya)
}catch(error){
  for(contentError in error){
    console.log(contentError)
   }
  //console.log(error)
  //console.log(error.message)
  //console.log(error.stack)
}
  