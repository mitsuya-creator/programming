//INCREMENTS 
var a1 = prompt('Enter first Number');
console.log('result input1',a1);
console.log('hasil result input1',parseFloat(a1.length));
function increment(){
  let result=0;
  for(i=0;i<arguments.length;i++){
    result+=arguments[i];
  }
return result;
}
console.log("increment: ",increment(1,2));


//DECREMENT 
function decrement(){
  let result=arguments[0];
  for(i=0;i+1<arguments.length;i++){
    result-=arguments[i+1];
  }
  return result;
}
console.log("decrement: ",decrement(1,2,8));

//PRODUCT

//DIVISION


