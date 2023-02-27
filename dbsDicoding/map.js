// // Map()
// /*let mitsuya = new Map(
//   [
//     ["name", "mitsuya" ],
//     [true, false],
//     ["name of school", "SMK SUKALUYU"]
//   ]
// );
  
// console.log(mitsuya.get("name"));
// console.log(mitsuya.size)
// mitsuya.set("gf", 404); // add gf
// console.log(mitsuya.get("gf"));
// console.log(mitsuya.size)
// */


// // SET
// // let number = new Set();
// // number.add(6);
// // number.add("tujuh",7);

// // console.log(number)

// function calculate(value) {
//     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// }

// console.log(calculate(3));





/*

Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 
*/
class Animal{
  constructor (name,age,isMammal){
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}
class Rabbit extends Animal{
  eat = (name) => {
    return `${this.name} sedang makan!`;
   }
  isMammal = (isMammal) => {
    return this.isMammal = true;
  }
}
class Eagle extends Animal{
  fly = (name) => {
    return `${this.name} sedang terbang!`;
  }
  isMammal = (isMammal) => {
    return this.isMammal = false;
  }
}
let myRabbit = new Rabbit("Labi",2);
let myEagle = new Eagle("Elo",4);





