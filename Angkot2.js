/* Angkot js 
Angkot no 1-4 dan 6 baik
Angkot no 7 dan 9 rusak
Angkot no 5,8 dan 10 lembur
*/
var jmlAngkot = 10;
var AngkotBeroperasi = 8;
var noAngkot = 1;

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){
  if(noAngkot<=4||noAngkot==6){
    console.log(`Angkot no ${noAngkot} baik`)
  }
  else if(noAngkot== 5||noAngkot==8||noAngkot==10){
    console.log(`Angkot no ${noAngkot} lembur`)
  }
  else{
    console.log(`Angkot no ${noAngkot} rusak`)
  }
}