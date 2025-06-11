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
  tablica.innerHTML="<tr><th>Ime</th><th>Prezime</th><th>Adresa</th><th>Email</th><th>Telefon</th></tr>";
  for(let i=0;i<kupci.length;i++)
    tablica.innerHTML+="<tr><td>"+kupci[i].ime+"</td><td>"+kupci[i].prezime+"</td><td>"+kupci[i].adresa+"</td><td>"+kupci[i].email+"</td><td>"+kupci[i].telefon+"</td></tr>";
}

function spremi(){
  localStorage.setItem("kupci",JSON.stringify(kupci));
}

//animacija u headeru
document.addEventListener("DOMContentLoaded", () => {
        const circle = document.getElementById("rollingCircle");
        const header = document.querySelector("header");

        //dimenzije gumba(u pikselima)
        const circleDiameter = circle.offsetWidth;
        //obujam gumba
        const circumference = Math.PI * circleDiameter;
        //stupnjevi rotacije
        const degPerPixel = 360 / circumference;

        //početna X-koordinata
        let posX = header.clientWidth - circleDiameter; //gumb je točno na desnom rubu
        //početni stupnjevi rotacije
        let rotationDeg = 0;

        //brzina gumba (pikseli/s)
        const speedPxPerSec = 100;
        let lastTimestamp = null;

        function animate(timestamp) {
          if (!lastTimestamp) lastTimestamp = timestamp;
          const deltaSec = (timestamp - lastTimestamp) / 1000;
          lastTimestamp = timestamp;

          //pomak udesno
          const dx = speedPxPerSec * deltaSec;
          posX += dx;

          //rotacija
          rotationDeg += dx * degPerPixel;

          //ponovna pojava gumba
          if (posX >= header.clientWidth) {
            posX = -circleDiameter;
            rotationDeg = 0;
          }
          circle.style.left = posX + "px"; //pomak ulijevo
          circle.style.transform = `rotate(${rotationDeg}deg)`; //rotacija

          requestAnimationFrame(animate);
        }
        //beskonačna animacija
        requestAnimationFrame(animate);
      });