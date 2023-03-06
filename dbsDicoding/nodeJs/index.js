// ASYNC AWAIT

//Promise GetCofee() 
const getCoffee = () => {
  return new Promise((resolve,reject) => {
    let seeds = 1000;
    if(seeds >= 100){
      resolve('Coffee Ready')
    }else{
      reject('We need seeds coffee more')
    }
  })
}
//Using then()
// function makingCoffe(){
//   getCoffee().then(resolve => console.log(resolve)).catch(reject => console.log(reject));
// }

//Using Async / await
async function makingCoffe() {
  try{
  const coffee = await getCoffee();
  console.log(coffee);
  }catch(reject){
    console.log(reject);
  }
}
makingCoffe();