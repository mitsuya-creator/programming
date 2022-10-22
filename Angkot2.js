var jmlAngkot = 10;
var angkotBeroperasi = 5;
var noAngkot = 1;

for(noAngkot;noAngkot<=jmlAngkot;noAngkot++){
  if(noAngkot<=angkotBeroperasi){
    console.log(`Angkot no ${noAngkot} BAIK`)
  }else{
    console.log(`Angkot no ${noAngkot} RUSAK`)
  }
}