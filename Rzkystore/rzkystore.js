//Template Objeck list-item
function List_items(category,name,amount){
  this.category = category;
  this.name = name;
  this.amount = amount;
  this.adverb = function(){
    if(amount < 2 ){
      return "KURANG";
    }
    else{
      return "CUKUP";
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
let ggMerah = new List_items("ROKOK","GG-MERAH-KRETEK",7);
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
let mbKretekBiru = new List_items("ROKOK","MB-BIRU-KRETEK",6);
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
let mustika = new List_items("ROKOK","MUSTIKA-KRETEK",6);
let magnumMax = new List_items("ROKOK","MAGNUM-MAX20",6);
let onJasmin = new List_items("ROKOK","ON-JASMINE-KRETEK",3);
let bintangMas = new List_items("ROKOK","BINTANG-MAS-KRETEK",6);
let djavaHijau = new List_items("ROKOK","DJAVA-IJO-KRETEK",7);
let bhumi = new List_items("ROKOK","BHUMI-KRETEK",1);
let esBerypop12 = new List_items("ROKOK","ESSE-BERRYPOP-12",1);
let cakra = new List_items("ROKOK","CAKRA-KRETEK",1);

// List Items ROKOK
let listRokok = [laBold,mldBlack16,djarcok,super12,super50,signatureBlk,ggMerah,proMerah,proPutih,surya12,surya16,ggFilter12,ggFilter50,samsuKretek,magnumBlk12,samsuPrem,mbFb12,mbFb20,mbKretekBiru,mbIceburst,mbMerah,mbPutih,sm12,sm16,smKrtk,smMenthol16,esBerypop12,esBerypop16,esApplemint,esJuicy,camel,jazyBold,juaraKrtk,mustika,magnumMax,onJasmin,bintangMas,djavaHijau,bhumi,cakra];

// LIST OBJECK OBAT
let vegeta = new List_items("OBAT","VEGETA",3);
let konidin = new List_items("OBAT","KONIDIN",3);
let neozep = new List_items("OBAT","NEOZEP",6);
let panadoL_ijo = new List_items("OBAT","PANADOL-IJO",1);
let miranBlack = new List_items("OBAT","MIRANDA-BLACK",1);
let viks_inhelar = new List_items("OBAT","VIKS44-INHELAR",1);
let bejo_jahe = new List_items("OBAT","BEJO-JAHE-MERAH",6);
let antangin = new List_items("OBAT","ANTANGIN",7);
let waisan = new List_items("OBAT","WAISAN",7);
let fnl_wash = new List_items("OBAT","FAIR&LOVELY-WASH",1);
let tAnginDws = new List_items("OBAT","TOLAK-ANGIN-DWS",7);
let contrexin = new List_items("OBAT","CONTREXIN",7);
let byeFever = new List_items("OBAT","BYE-BYE-FEVER",7);
let promag = new List_items("OBAT","PROMAG",7);
let kayuPutihKcl = new List_items("OBAT","KAYU-PUTIH-KECIL",1);
let sgrDinginOri = new List_items("OBAT","SEGAR-DINGIN-ORI",7);
let ceteme = new List_items("OBAT","CETEME",7);
let tisu2500 = new List_items("OBAT","TISU-2500",7);
let vitacimin = new List_items("OBAT","VITACIMIN",7);
let bodrex_FB = new List_items("OBAT","BODREX-FLU-BATUK",7);
let baygonBkr = new List_items("OBAT","BAYGON-BAKAR",7);
let koyoCabe = new List_items("OBAT","KOYO-CABE",7);
let salonpas = new List_items("OBAT","SALONPAS",7);
let bintang7 = new List_items("OBAT","BINTANG-7",7);
let entroStopAnak = new List_items("OBAT","ENTROSTOP-ANAK",1);
let komikObh = new List_items("OBAT","KOMIK-OBH",7);
let oskadonBiru = new List_items("OBAT","OSKADON-BIRU",7);
let oskadonSP = new List_items("OBAT","OSKADON-SP",7);
let mixagripFlu = new List_items("OBAT","MIXAGRIP-FLU",7);
let mixagripFB = new List_items("OBAT","MIXAGRIP-FLU-BATUK",7);
let geliga = new List_items("OBAT","BALSEM-GELIGA",7);
let mirandBlech = new List_items("OBAT","MIRANDA-BLEACHING",1);
let mirandColor = new List_items("OBAT","MIRANDA-WARNA",1);
let freshCareMerah = new List_items("OBAT","FRESH-CARE-MERAH",7);
let hitBakar1000 = new List_items("OBAT","HIT-BAKAR1000",7);
let betadin = new List_items("OBAT","BETADIN",7);
let laserin = new List_items("OBAT","LASERIN-BATUK",7);
let reumacyl = new List_items("OBAT","NEO-REUMACYL",7);
let paramexKepala = new List_items("OBAT","PARAMEX-KEPALA",7);
let ademsariSet = new List_items("OBAT","ADEMSARI-SACHET",7);
let aladina = new List_items("OBAT","ALADINA",7);
let madurasa = new List_items("OBAT","MADURASA",7);
let antimo = new List_items("OBAT","ANTIMO-DWS",7);
let tAnginAnak = new List_items("OBAT","TOLAK-ANGIN-ANAK",1);
let hansaplas = new List_items("OBAT","HANSAPLAS",1);

// LIST ITEM OBAT
let listObat = [vegeta,konidin,neozep,panadoL_ijo,miranBlack,viks_inhelar,bejo_jahe,antangin,waisan,fnl_wash,tAnginDws,contrexin,byeFever,promag,kayuPutihKcl,sgrDinginOri,ceteme,tisu2500,vitacimin,bodrex_FB,baygonBkr,koyoCabe,salonpas,bintang7,entroStopAnak,komikObh,oskadonSP,oskadonBiru,mixagripFlu,mixagripFB,geliga,mirandColor,mirandBlech,freshCareMerah,hitBakar1000,betadin,laserin,reumacyl,paramexKepala,ademsariSet,aladina,madurasa,antimo,tAnginAnak,hansaplas];

//FUNCTION FOR CREATE TABLE BODY AND CONTENT
function createTableContent(itemTocreate){
  // CREATE TABEL TEMPLATE AND HEADER
let table = `
<table class="table mb-5">
  <thead class="category table-dark">
    <tr>
      <td colspan="4" class="text-center fw-bold">${itemTocreate[0].category}</td>
    </tr>
  </thead>
  <thead class="table-secondary">
    <tr>
      <th scope="col">NO</th>
      <th scope="col">NAMA BARANG</th>
      <th scope="col"></th>
      <th scope="col">KETERANGAN</th>
    </tr>
  </thead>
  <tbody id="${itemTocreate[0].category}">
  </tbody>
</table>
`;
// GET ELEMENT CONTAINER  && CREATE TABLE TEMPLATE HEADER
document.getElementById("container").appendChild(document.createElement("div")).innerHTML= table;
// GET ELEMENT TBODY
let tbody = document.getElementById(`${itemTocreate[0].category}`);
// FOR NUMBER IN TBODY
let noColumn = 1;
    // LOOPING FOR LIST ITEM
    for(arrContent of itemTocreate){
      let trTableContent = `
          <th scope="row">${noColumn++}</th>
          <td>${arrContent.name}</td>
          <td class="text-center">...</td>
          <td>${arrContent.adverb()}</td>`;
      if(arrContent.adverb() == "KURANG"){
        let trTableDanger = tbody.appendChild(document.createElement("tr"));
        trTableDanger.setAttribute("class","table-danger");
        trTableDanger.innerHTML = trTableContent;
        }
      else{
        tbody.appendChild(document.createElement("tr")).innerHTML=trTableContent;
      }
    if(noColumn > itemTocreate.length){
      
    }
    }
}

//EXECUTE FUNCTION createTableContent
createTableContent(listRokok);
createTableContent(listObat);