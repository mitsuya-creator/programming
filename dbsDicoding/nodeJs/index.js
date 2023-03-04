// > LAKUKAN PENGECEKAN KETERSEDIAN MESIN
// > PERIKSA STOCK DIDALAM MESIN
// > BUAT KOPI

const state = {
  stock: {
    coffee : 500,
    water : 1000
  },
  isCoffeeMachineBusy: false
}
console.log('console-1')
const checkAvaibility = () => {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
    if(state.stock.coffee > 100 && state.stock.water > 50){
      resolve('Material ready to used')
    }
    else{
      reject('bahan kurang')
    }
  }, 5000)})
}
console.log(setTimeout(() = > checkAvaibility(),1000))
console.log('console-2')
