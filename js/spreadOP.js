//SPREAD OPERATOR { ... }
// copy Array
const mhs = ['mitsuya','draken','mickey']
const mhs1 = [...mhs];

// Join Array
const mhs2 = ['hina','diana','sanju']
const mhs3 = [...mhs2,...mhs1]

// IN OBJECT 
let listOBJ ={
  obj1: mhs,
  obj2: mhs1,
  obj3: mhs2,
  obj4: mhs3
}
//indx tertentu 
//PR looking for Mitsuya only in all property with position of mitsuya, Exam: in obj4 there's mitsuya in index 0  then print to console, ✅✅
for(property in listOBJ){
      let result,idx;
      result = []
      idx = `${listOBJ[property].length}`
      console.log(`${property} = ${listOBJ[property]}`)
      for(i = 0; i < idx; i++){
        let content= listOBJ[property][i];
        result.push(content);
      }
    if(result.includes("mitsuya") == true){
      result.map((content,i) => {
        if(content == "mitsuya"){
        console.log(`IN ${property} idx[${i}] = ${content}`)
        }
      })
    }
    else{
      console.log(`IN ${property} no mitsuya found `)
    }
}
