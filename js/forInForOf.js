// FOR OF LOOPING FOR ITERABLE
const mhs = ["mitsuya","draken","shiba"]
//
// //for(m of mhs){
//   console.log(m)
// }
const mitsuya = prompt("your sentences").toLowerCase();
let newArr= [];
for(i of mitsuya){//
  for(r of "aueo"){
    if(i == r){
      i = "i"
    }
  }
  newArr.push(i);
}
console.log(newArr)
console.log(newArr.join("").toLowerCase())