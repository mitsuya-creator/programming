// LODASH

//Without Lodash
// const myArr = [1,2,3,4];
// let sum = 0;
// for(i = 0; i < myArr.length; i++){
//   sum+=myArr[i];
// }


//With lodash
import _ from "lodash";
const myArr = [1,2,3,4,5]
const sum = _.sum(myArr);

console.log(sum);