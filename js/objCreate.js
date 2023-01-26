// calculate obj create = pewarisan atau inheritance
let methodOpr = {
  sum: function(bil1,bil2){
    console.log(this.bil1 + this.bil2);
  },
  subtrac: function(bil1,bil2){
    console.log(this.bil1 - this.bil2);
  },
  multiplication: function(bil1,bil2){
    console.log(this.bil1 * this.bil2)
  },
  dividen: function(bil1,bil2){
    console.log(this.bil1 <= 0 ? `${this.bil1} Cannot divided` : this.bil1 / this.bil2);
  }
}
function Angka(bil1,bil2){
  let opr = Object.create(methodOpr);
  opr.bil1 = bil1;
  opr.bil2 = bil2;
  return opr;
}
let input1 = parseInt(prompt('input bil1'));
let input2 = parseInt(prompt('input bil2'));
let askopr = prompt('what will you use ? (+) (-) (*) (/)');
let usr1 = new Angka(input1,input2);
switch (askopr) {
  case '+':
    // code
    usr1.sum();
    break;
  case '-':
    usr1.subtrac();
    break;
   case '*':
     usr1.multiplication();
     break;
  case '/':
    usr1.dividen();
    break;
}