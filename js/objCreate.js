// App Store Rizky
// ALGORITHM
/*  JENIS ROKOK ["SM","DJ","GG"]
SELL = HARGA JUAL KE KONSUMEN
BUY = HARGA BELI DARI TOKO/SALES
*/
function NameCigarettes(merk,kind){
    this.merk = merk;
    this.kind = kind;
    this.buy = function(kindOfCigarettes,amount) {
      for( i = 0; i <= this.kind.length; i++){
        if(this.kind.length == 0 || (this.kind.includes(kindOfCigarettes) == false)){
          this.kind.push(kindOfCigarettes);
          this.kind.push(amount);
          return kind;
        }
        else if(this.kind[i] == kindOfCigarettes){
          if(kind[i+1] == undefined){
            kind[i+1] = 0;
            this.kind.splice(i+1,1,kind[i+1]+amount);
            return kind;
          }
          else{
          this.kind.splice(i+1,1,kind[i+1]+amount);
          return kind;
        }
        }
    }
  }
}
let SM = new NameCigarettes("Sampoerna",[])



