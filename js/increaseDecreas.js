let num = document.getElementById("num").value;
let result;
function increase (){
  if(num == ""){
    result = parseInt(0+1);
  }
  else{
    result = parseInt(num)+1;
  }
  return document.getElementById("num").value= result;
}
