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
  
  //method passenger OUT
  this.passengerOUT = function(namePassenger,bill){
    //IF Bill not filled
    if(bill == undefined){
      console.log('Bill Incorrect!');
      return this.kas;
    }
    else{
    //Looping to check there's name Of Passenger in Angkot
    for( i = 0; i < passenger.length; i++){
      if(passenger[i] == namePassenger){
        this.passenger[i] = undefined;
        this.kas += bill;
        return console.log(this.kas,this.passenger);
      }
    }
    //Console.log if there's not name of passenger IN Angkot!
    console.log(`${namePassenger} is not IN Angkot!`);
    return passenger;
    }
  }
  
}
//list Angkots
Angkot1 = new Angkot('mitsuya',['cimahi','cibiru'],[],0)
Angkot2 = new Angkot('mickey',['ciroyom','antapani'],[],0)

//PR
// console log when passenger is not in ANGKOT
// push new passenger to fill undefined 

/* PROGRAM ANGKOT DONE 23 JANUARY 23 ✅✅*/

//NEW PR HOW TO CREATE AND REMOVE ANGKOT (ANGKOT V2) DONE 23 JANUARY Z23 ✅✅
// for create ex Angkot = new Angkot()
// for remove using keyword delete <<name Object>> ex delete Angkot1. *NOTED MAKE SURE OBJ(Angkot1) is obj GLOBAL! not var OR let keyword !

// NEW PR IMPLEMENTASI IN WEB PAGE BROWSER ❌❌❌