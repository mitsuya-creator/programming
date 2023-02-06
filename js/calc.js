// CALC APP
let app = {
  number: [],
  calc: function (...args){
    let result = parseFloat(`${args}`);
    this.number.push(result);
  }
}
function history(){
  for(i = 0; i < app.number.length; i++){
  console.log(app.number[i])
  }
}