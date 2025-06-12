//animacija u headeru
document.addEventListener("DOMContentLoaded", () => {
  const circle = document.getElementById("rollingCircle");
  const header = document.querySelector("header");

  //dimenzije gumba
  const circleDiameter = circle.offsetWidth;
  //obujam gumba
  const circumference = Math.PI * circleDiameter;
  //stupnjevi rotacije
  const degPerPixel = 360 / circumference;

  //početna X-koordinata
  let posX = header.clientWidth - circleDiameter; //gumb je točno na desnom rubu
  //početni stupnjevi rotacije
  let rotationDeg = 0;

  //brzina gumba
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
