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
    //Looping to check Angkot
    for( i = 0; i <= passenger.length; i++){
      //if Angkot still Empty
      if(passenger.length == 0 || passenger[0] == [] ){
        this.passenger.push(namePassenger);
        return passenger;
      }
      //if IN Angkot there's undefined 
      if(passenger[i] == undefined){
        this.passenger[i] = namePassenger;
        return passenger;
      }
    }
  }
  
}
let Angkot1 = new Angkot('mitsuya',['cimahi','cibiru'],['hina',undefined,'takeo'],0)
let Angkot2 = new Angkot('mickey',['ciroyom','antapani'],[],0)

//PR
// console log when passenger is not in ANGKOT
// push new passenger to fill undefined 