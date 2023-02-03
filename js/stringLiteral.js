// // string literal is using `` back tick
let mhs = {
  name: "mitsuya",
  age: 34,
  study : [
    [
    "web programming",
    "data science",
    "data analyst"
      ],
    [
    "cooking vegetables",
    "beverage"
      ],
    [
      "business",
      "marketing",
      "akuntansi",
      "tatakelola",
      "archived",
      "management"
      ],
    [
      "aljabar",
      "linear",
      "aritmatika"
      ]
    ]
}

// console.log(`hello everyone, my name is ${mhs.name} my age ${mhs.age} year.
// ${(2+3)}
// ${(mhs.age > 40 ? "old" : "young")} `)
function printf(e){
  let content= "";
  for(i = 0; i < e.length; i++){
    for(j = 0; j < e[i].length; j++){
     content += `<li>${e[i][j]}</li>`;
    }
  }
  return content;
}




const el = `<h1>DATA MHS</h1>
<span>name : ${mhs.name}</span><br>
<span>age : ${mhs.age}</span>
<ol>${printf(mhs.study)}</ol>`;;
document.body.innerHTML = el;

console.log(printf(mhs.study));