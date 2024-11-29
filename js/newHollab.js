let showHollabClick = document.querySelectorAll(".showHollabButton");
let showHollabSecond = document.querySelectorAll(".showSecondHolap");
let showHollab = document.getElementById("showHollab");
let overlay = document.getElementById("overlay");
let showHollab2 = document.getElementById("showHollab2");
showHollabClick.forEach((hollbs) => {
  hollbs.addEventListener("click", () => {
    showHollab.classList.remove("d-none");
    overlay.classList.remove("d-none");
  });
});
showHollabSecond.forEach((hollbs) => {
  hollbs.addEventListener("click", () => {
    showHollab2.classList.remove("d-none");
    overlay.classList.remove("d-none");
  });
});
overlay.addEventListener("click", () => {
  showHollab.classList.add("d-none");
  overlay.classList.add("d-none");
  showHollab2.classList.add("d-none");
});
let secShowTwo = document.getElementById("secShowTwo");
let secOneShow = document.getElementById("secOneShow");
function shwoSecIn() {
  if(secShowTwo.classList.contains("d-none")){
    secShowTwo.classList.remove("d-none");
    secOneShow.classList.add("d-none");
  }
  else{
    secShowTwo.classList.add("d-none");
    secOneShow.classList.remove("d-none");
  }
}
