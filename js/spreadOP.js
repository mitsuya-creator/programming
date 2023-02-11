//SPREAD OPERATOR { ... }

// copy Array
const mhs = ['mitsuya','draken','mickey']
const mhs1 = [...mhs];

// Join Array
const mhs2 = ['hina','diana','sanju']
const mhs3 = [...mhs2,...mhs1]
// let mhs3 = []
// function push(fromArr,toArr){
//   for(content of fromArr){
//     toArr.push(content);
//   }
// }

let listOBJ ={
  obj1: mhs,
  obj2: mhs1,
  obj3: mhs2,
  obj4: mhs3
}

//indx tertentu 
//PR looking for Mitsuya only in all property with position of mitsuya, Exam: in obj4 there's mitsuya in index 0  then print to console, PR❌❌❌
for(m in listOBJ){
  let newStr = []
  let idx = parseInt(`${listOBJ[m].length - 3}`)
  for(str of `${listOBJ[m][idx]}`){
    newStr.push(`<span>${str}</span>`)
  }
  console.log(newStr.join(""))
}
