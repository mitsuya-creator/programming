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
    this.passenger.push(namePassenger);
    
    return this.passenger;
  }
  //method passenger OUT
  this.passengerOUT = function(namePassenger,bill){
    for(i = 0; i < passenger.length ; i++){
      if(passenger[i]===namePassenger){
        passenger[i] = undefined;
        this.kas += bill;
        return false;
      }
    }
  }
  
}
let Angkot1 = new Angkot('mitsuya',['cimahi','cibiru'],[],0)
let Angkot2 = new Angkot('mickey',['ciroyom','antapani'],[],0)