// Greetings  Simple

function greetings(time){
  return function(name){
    alert(`Hello ${name} , Good ${time} \rHow Are you today? :)`)
  }
}
 name = prompt('What is you name ? ')
 time = prompt('What time is it ? \r 0: Morning 1: Afternoon 2: Evening')
 switch (time) {
   case '0' || 'Morning':
     // code
     time = 'Morning';
     break;
   case '1' || 'Afternoon':
     time = 'Afternoon';
     break;
   case '2' ||'Evening':
     time = 'Evening';
     break;
 }
 greetings = greetings(time);
 greetings(name)