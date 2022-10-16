let a=1,b = '2';
//creat using $ and eval() will return sting

//returm string
console.log("this line use $",typeof`${a}`)
//return number
console.log(typeof(a))

//isfinite function, to test value is not Infinity
function div(angkaUser){
  if(isFinite(1000/angkaUser)){
    return "number is not infinity"
    
  }
  return "number is infinite"
}

console.log(div(0))
console.log(div(1))