// REST Parameters
function highlight(str, ...exps){
  let result = "";
  str.forEach((strings,i) => {
    result += `<span>${strings}</span><span class="highlight">${exps[i] || ""}</span>`;
  })
  return result;
}
let name = "MITSUYA", age = 21, sch = 'SMKN1 SUKALUYU'
let content1 = highlight`Hello everyone, my name is ${name}, my age ${age} years, I'm alumnus ${sch}`





document.querySelector(".container").innerHTML= content1 ;