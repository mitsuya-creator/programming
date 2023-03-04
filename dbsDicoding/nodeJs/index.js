// ALGORITHM MAKE A CUP OF COFFE 
// > CHECK STOCK
// > BOILING WATER
// > GRINDING COFFE
// > BREW COFFE
// > CHECK COFFE MACHINE
// > COFFE READY TO DRINK

// OBJECT STOCK
let stock = {
  coffee: 100,
  water: 100,
  coffeMachine: 0
}
// CHECK STOCK
let checkAvaibility = () => {
  console.log('checking...')
  return new Promise((ready,notReady) => {
    setTimeout(() => {
    if(stock.coffee > 50 && stock.water > 50){
      ready(`STOCK Enough! coffee and water ready to used`)
    }else{
      notReady('material not ready to used')
    }
    },2000)
  })
}

let checkCoffeMachine = () => {
  return new Promise((ready,notReady) => {
    setTimeout(() =>{
    if(!stock.coffeMachine){
      ready('coffeMachine ready to used')
    }else{
      notReady('coffe Machine broken')
    }
   },1000);
  })
}

let boilingWater = () => {
  return new Promise((ready,notReady) => {
    console.log('water is boiling');
    setTimeout(() => {
      ready('hot water is ready')
    }, 3000);
  })
}

let grindingCoffe = () => {
  return new Promise((ready,notReady) => {
    console.log('coffee is grinding');
    setTimeout(() => {
      ready('grinding coffee done')
    },1000);
  })
}

let brewCoffe = () => {
  return new Promise((ready,notReady) => {
    console.log('coffe is brewing');
    setTimeout(() => {
      ready('brewing coffee done, coffe Ready to drink!')
    },3000)
  })
}


function makingCoffee(){
  checkAvaibility()
  .then(success => {
    console.log(success);
    return checkCoffeMachine();
  })
  .then(success => {
    console.log(success);
    const promises = [boilingWater(),grindingCoffe()];
    return Promise.all(promises);
  })
  .then(success => {
    console.log(success);
    return brewCoffe();
  })
  .then(success => {
    console.log(success)
    })
  .catch(notReady => {
    console.log(notReady);
    stock.coffeMachine = false;
  })
}

makingCoffee();
