function added(){
  let result=1;
  for(i=0;i<arguments.length;i++){
    result*=arguments[i];
  }
  return result;
}
console.log(added(1,2,3,4,5,6));

