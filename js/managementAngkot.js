/* Management Angkot Apps
> driver
> Trayek
> Kas
> passenger
  >passenger IN
  >passenger OUT
*/
// Sum of Angkot 3
//ANGKOT Using Contructor 
function Angkot(driver,trayek, passenger,kas){
  this.driver= driver;
  this.trayek = trayek;
  this.passenger = passenger;
  this.kas = kas;
  
  //method passenger IN
  this.passengerIN = function(namePassenger){
    this.passenger.push(namePassenger.toLowerCase());
  }
  //method passenger OUT
  this.passengerOUT = function(namePassenger,bill){
    //if bill not filled / BLANK
    if( bill == undefined ){
      console.log('Bill INCORRECT! (passenger,bill)!');
      
    }
    else{
      namePassenger = namePassenger.toLowerCase();
      for(i = 0; i < passenger.length ; i++){
        //check or find passenger in Angkot
      if(passenger[i]==namePassenger){
        passenger[i] = undefined;
        this.kas += bill;
      }
    }
    }
  }
  
}
let Angkot1 = new Angkot('mitsuya',['cimahi','cibiru'],[],0)
let Angkot2 = new Angkot('mickey',['ciroyom','antapani'],[],0)

//PR
// console log when passenger is not in ANGKOT
// push new passenger to fill undefined 