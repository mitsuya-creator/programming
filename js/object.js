// Make Object literal
let mhs = {
  nama: 'mitsuya takashi',
  energi: 10,
  passion: 'programmingTech'
}
let mhs1 = {
  nama: 'izana',
  energi: 2,
  passion: 'networking'
}

// Make Object Declaration
function objDeclaration(nama,energi,passion){
  let mhs={};
  mhs.nama=nama;
  mhs.energi=energi;
  mhs.passion=passion;
  return mhs;
}

let mhs2=objDeclaration('draken',60,'fighter')
let mhs3=objDeclaration('mickey',80,'assasin')

// Make Object Constructor
function Mahasiswa(nama,energi,passion){
  this.nama=nama;
  this.energi=energi;
  this.passion=passion;
  this.ate = function (porsi){ //Method is property/key contained function
    this.energi+=porsi;
  }
  this.played = function (hour){ //Method is property/key contained function
    this.energi-=hour;
  }
}

let mhs4=new Mahasiswa('kisaki',70,'fighter')
let mhs5=new Mahasiswa('rahayu',50,'mage')

/*
for(let key in mhs4){
  console.log(`${key}: ${mhs4[key]}`)
}
*/


