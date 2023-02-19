//Template Objeck list-item
function List_items(category,name,amount){
  this.category = category;
  this.name = name;
  this.amount = amount;
  this.adverb = function(){
    if(amount < 3 && category == "ROKOK"){
      console.log("kurang");
    }
    else{
      console.log("cukup");
    }
  }
}
//LIST_OBJECT ROKOK
let laBold = new List_items("ROKOK","LA-BOLD",2);
let mldBlack16 = new List_items("ROKOK","MLD-BLACK16",2);
let djarcok = new List_items("ROKOK","DJARUM-COKLAT-KRETEK",4);
let super12 = new List_items("ROKOK","SUPER12",4);
let super50 = new List_items("ROKOK","SUPER50",6);
let signatureBlk = new List_items("ROKOK","SIGNATURE-BLACK",5);
let ggMerah = new List_items("ROKOK","GG-MERAH",7);
let proMerah = new List_items("ROKOK","PRO-MERAH",7);
let proPutih = new List_items("ROKOK","PRO-PUTIH",2);
let surya12 = new List_items("ROKOK","SURYA12",4);
let surya16 = new List_items("ROKOK","SURYA16",5);
let ggFilter12 = new List_items("ROKOK","GARPIT12",6);
let ggFilter50 = new List_items("ROKOK","GARPIT50",6);
let samsuKretek = new List_items("ROKOK","SAMSU-KRETEK",6);
let magnumBlk12 = new List_items("ROKOK","MAGNUM-BLACK12",7);
let samsuPrem = new List_items("ROKOK","SAMSU-PREM",6);
let mbFb20 = new List_items("ROKOK","MB-FB20",4);
let mbFb12 = new List_items("ROKOK","MB-FB12",6);
let mbKretekBiru = new List_items("ROKOK","MB-KRETEK-BIRU",6);
let mbIceburst = new List_items("ROKOK","MB-ICE-BURST",2);
let mbMerah = new List_items("ROKOK","MB-MERAH",3);
let mbPutih = new List_items("ROKOK","MB-PUTIH",4);
let sm12 = new List_items("ROKOK","SM12",6);
let sm16 = new List_items("ROKOK","SM16",6);
let smKrtk = new List_items("ROKOK","SM-KRETEK",6);
let smMenthol16 = new List_items("ROKOK","SM-MENT-16",6);
let esBerypop16 = new List_items("ROKOK","ESSE-BERRYPOP-16",6);
let esApplemint = new List_items("ROKOK","ESSE-APPPLEMINT",6);
let esJuicy = new List_items("ROKOK","ESSE-JUICY",6);
let camel = new List_items("ROKOK","CAMEL",6);
let jazyBold = new List_items("ROKOK","JAZY-BOLD",5);
let juaraKrtk = new List_items("ROKOK","JUARA-KRETEK",6);
let mustika = new List_items("ROKOK","MUSTIKA",6);
let magnumMax = new List_items("ROKOK","MAGNUM-MAX20",6);
let onJasmin = new List_items("ROKOK","ON-JASMINE",3);
let bintangMas = new List_items("ROKOK","BINTANG-MAS",6);
let djavaHijau = new List_items("ROKOK","DJAVA-IJO-KRETEK",7);
let bhumi = new List_items("ROKOK","BHUMI",6);
let esBerypop12 = new List_items("ROKOK","ESSE-BERRYPOP-12",6);
let cakra = new List_items("ROKOK","CAKRA",6);

// List Items ROKOK
let listRokok = [laBold,mldBlack16,djarcok,super12,super50,signatureBlk,ggMerah,proMerah,proPutih,surya12,surya16,ggFilter12,ggFilter50,samsuKretek,magnumBlk12,samsuPrem,mbFb12,mbFb20,mbKretekBiru,mbIceburst,mbMerah,mbPutih,sm12,sm16,smKrtk,smMenthol16,esBerypop12,esBerypop16,esApplemint,esJuicy,camel,jazyBold,juaraKrtk,mustika,magnumMax,onJasmin,bintangMas,djavaHijau,bhumi,cakra];
// 
for(arrRokok of listRokok){
  //console.log(arrRokok.name, arrRokok.amount)
}

// CREATE TABEL
let table = `
<table class="table">
  <thead class="category table-dark">
    <tr>
      <td colspan="4" class="text-center fw-bold">ROKOK</td>
    </tr>
  </thead>
  <thead class="table-secondary">
    <tr>
      <th scope="col">NO</th>
      <th scope="col">NAMA BARANG</th>
      <th scope="col">JUMLAH BARANG(PCSs)</th>
      <th scope="col">KETERANGAN</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>
`;
document.getElementById("container").appendChild(document.createElement("div")).innerHTML= table;
let tbody = document.querySelector("tbody");
console.log(tbody)
