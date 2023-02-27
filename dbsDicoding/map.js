// // // Map()
// // /*let mitsuya = new Map(
// //   [
// //     ["name", "mitsuya" ],
// //     [true, false],
// //     ["name of school", "SMK SUKALUYU"]
// //   ]
// // );
  
// // console.log(mitsuya.get("name"));
// // console.log(mitsuya.size)
// // mitsuya.set("gf", 404); // add gf
// // console.log(mitsuya.get("gf"));
// // console.log(mitsuya.size)
// // */


// // // SET
// // // let number = new Set();
// // // number.add(6);
// // // number.add("tujuh",7);

// // // console.log(number)

// // function calculate(value) {
// //     return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
// // }

// // console.log(calculate(3));





// /*

// Buatlah class bernama Animal dengan ketentuan:
// *    - Memiliki properti:
// *      - name: string
// *      - age: int
// *      - isMammal: boolean
// *    - Memiliki constructor untuk menginisialisasi properti:
// *      - name
// *      - age
// *      - isMammal
// * 2. Buatlah class bernama Rabbit dengan ketentuan:
// *    - Merupakan turunan dari class Animal
// *    - Memiliki method:
// *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
// *    - Ketika diinstansiasi, properti isMammal harus bernilai true
// * 3. Buatlah class bernama Eagle dengan ketentuan:
// *    - Merupakan turunan dari class Animal
// *    - Memiliki method:
// *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
// *    - Ketika diinstansiasi, properti isMammal harus bernilai false
// * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
// *    - properti name bernilai: "Labi"
// *    - properti age bernilai: 2
// * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
// *    - properti name bernilai: "Elo"
// *    - properti age bernilai: 4
 
// */
// class Animal{
//   constructor (name,age,isMammal){
//     this.name = name;
//     this.age = age;
//     this.isMammal = isMammal;
//   }
// }
// class Rabbit extends Animal{
//   eat = (name) => {
//     return `${this.name} sedang makan!`;
//   }
//   isMammal = (isMammal) => {
//     return this.isMammal = true;
//   }
// }
// class Eagle extends Animal{
//   fly = (name) => {
//     return `${this.name} sedang terbang!`;
//   }
//   isMammal = (isMammal) => {
//     return this.isMammal = false;
//   }
// }
// let myRabbit = new Rabbit("Labi",2);
// let myEagle = new Eagle("Elo",4);





/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

// TODO
let greatAuthors = books.filter( book => {
  return book.sales > 1000000
}).map( book => {
  return `${book.author} adalah penulis buku ${book.title} yang sangat hebat!`;
}
);
console.log(greatAuthors)

//console.log(books[6].title)