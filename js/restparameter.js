/// Rest param in ARRRAY

let myArr = [2,3,2,4]
let newArr = [...myArr,4,6,7]
// let [idx1, ...sisa] = myArr
// console.log(idx1, sisa)
function sumof(...values){
  result = 0;
  for(m of values){
    for(content of m){
      result+=content
    }
  }
  return result
}
console.log(sumof(myArr))
console.log(sumof(newArr))

function args(){
  result = 0;
  for(m in arguments){
    if(typeof(arguments [m]) == "number"){
    result += arguments[m]
    }
  }
  return result 
}

console.log(args(2,"5",7,"mitsuya",8,9))
