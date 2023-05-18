// Gues number random
let soul = 3;
function guesNum(){
let number = Math.floor(Math.random()*10)+1;;
let ansUser = parseInt(prompt('input number among 1-10'));
while(number!= ansUser){
  let clue;
  if(number > 5) clue = 'the number among 5 to 10';
  if(number < 6) clue = 'the number among 1 to 5';
  ansUser = parseInt(prompt(`you're wrong! hint: ${clue}`));
  soul--;
  if(soul == 1){
    alert('you lose');
    break;
  }
}
if(number == ansUser){ alert('congratulations You Win!'); ask();}
else ask();
return;
}
guesNum();
function ask(){
let askTryAgain = confirm('try more game?');
if(askTryAgain === true){
   soul = 3;
   guesNum();
}else{
   alert('thanks')
};
}


