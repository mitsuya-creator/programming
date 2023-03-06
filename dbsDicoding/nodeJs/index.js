// ALGORITHM MAKING COFFEE
// >CHECK MACHINE COFFEE
// >CHECK STOCK MATERIAL COFFEE
// >BREWING COFFEE
// >COFFE READY
const water = require('./components/boilingWater');
class state{
  constructor(name,water){
    this.name = name;
    this.water = water;
  }
}

const expressoCoffee = new state('Expresso',100);
console.log(expressoCoffee)
console.log(boilingWater()) 