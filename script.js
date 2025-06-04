class Kupac{
  constructor(ime, prezime, adresa, email, telefon){
    this.ime=ime;
    this.prezime=prezime;
    this.adresa=adresa;
    this.email=email;
    this.telefon=telefon;
  }
}
let kupci=[];
let kupci_str=localStorage.getItem("kupci");
if(kupci_str!=null){
  let parsedData=JSON.parse(kupci_str);
  kupci=parsedData.map(obj=>new Kupac(obj.ime,obj.prezime,obj.adresa,obj.email,obj.telefon));
}
ispisTablice();
spremi();

function unesi() {
  let ime=document.getElementById("ime").value;
  let prezime=document.getElementById("prezime").value;
  let adresa=document.getElementById("adresa").value;
  let email=document.getElementById("email").value;
  let telefon=document.getElementById("telefon").value;
  kupci.push(new Kupac(ime, prezime, adresa, email, telefon));
  ispisTablice();
  spremi();
}

function ispisTablice(){
  let tablica=document.getElementById("tablica");
  tablica.innerHTML="<tr><th>RB</th><th>Ime</th><th>Prezime</th><th>Adresa</th><th>Email</th><th>Telefon</th></tr>";
  for(let i=0;i<kupci.length;i++)
    tablica.innerHTML+="<tr><td>"+(i+1)+"</td><td>"+kupci[i].ime+"</td><td>"+kupci[i].prezime+"</td><td>"+kupci[i].adresa+"</td><td>"+kupci[i].email+"</td><td>"+kupci[i].telefon+"</td></tr>";
}

function spremi(){
  localStorage.setItem("kupci",JSON.stringify(kupci));
}