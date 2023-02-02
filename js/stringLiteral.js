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
    ]
    ]
}

// console.log(`hello everyone, my name is ${mhs.name} my age ${mhs.age} year.
// ${(2+3)}
// ${(mhs.age > 40 ? "old" : "young")} `)

const el = `<h1>DATA</h1>
<span>name : ${mhs.name} </span><br>
<span>age : ${mhs.age} </span>
<ol> ${(mhs.study.map((std) => `<li>${std}</li>`).join(""))}</ol>
`;
document.body.innerHTML = el;

console.log(mhs.study[0][0]); //pr how to print in dom seem in object ❌