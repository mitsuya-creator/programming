// closure is function in function need variable from parent function

function greetings(time){
  return function(name){
    console.log(`Hello, good ${time} ${name}`)
  }
}
let Morn = greetings('Morning');
Morn('Mitsuya')
