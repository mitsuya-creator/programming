// ARROW FUNCTION =>
// function sum/subtract/div/mult/ of 2 number
let sumNum = (bill1,bill2) => { // arrow Function 
  alert(`result of ${bill1}+${bill2} are ${bill1+bill2}`);
}
let subtractNum = function(bill1,bill2){ // anonym function
  alert(`result of ${bill1}-${bill2} are ${bill1-bill2}`);
}
function divNum(bill1,bill2){// declaration function
  if(bill1 != 0){
    alert(`result of ${bill1} : ${bill2} are ${bill1/bill2}`);
  }
  else{
    alert(`0 cannot divided by ${bill2} , because it will be infinity`);
  }
}
let multipleNum = function mutlipleNum(bill1,bill2){// function expression with own name
  alert(`result of ${bill1}x${bill2} are ${bill1*bill2}`);
}

alert('Welcome into sum of 2 number Apps');
let askOprator = prompt('What Operator Will you choose?\r0: Sum 1: Subtract 2: Division 3: Multiplication');
let bill1 = parseInt(prompt('input number 1'));
let bill2 = parseInt(prompt('input number 2'));

switch (askOprator) {
  case '0':
    // code
    sumNum(bill1,bill2);
    break;
  case '1':
    subtractNum(bill1,bill2);
    break;
  case '2':
    divNum(bill1,bill2);
    break;
  case '3':
    multipleNum(bill1,bill2);
    break;
}
