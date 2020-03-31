const bildScale = document.getElementById("bildScale");
const bildScale2 = document.getElementById("bildScale2");
const bildScale3 = document.getElementById("bildScale3");
const bildScale4 = document.getElementById("bildScale4");
const bildScale5 = document.getElementById("bildScale5");

bildScale.addEventListener("click", () => {
  bildScale.style.height = "20rem";
  document.getElementById("paragraph-hidden").style.display = "block";
});
bildScale.addEventListener("mouseout", () => {
  bildScale.style.height = "27rem";
  document.getElementById("paragraph-hidden").style.display = "none";
});

bildScale2.addEventListener("click", () => {
  bildScale2.style.height = "20rem";
  document.getElementById("paragraph-hidden2").style.display = "block";
});
bildScale2.addEventListener("mouseout", () => {
  bildScale2.style.height = "27rem";
  document.getElementById("paragraph-hidden2").style.display = "none";
});

bildScale3.addEventListener("click", () => {
  bildScale3.style.height = "20rem";
  document.getElementById("paragraph-hidden3").style.display = "block";
});
bildScale3.addEventListener("mouseout", () => {
  bildScale3.style.height = "27rem";
  document.getElementById("paragraph-hidden3").style.display = "none";
});

bildScale4.addEventListener("click", () => {
  bildScale4.style.height = "20rem";
  document.getElementById("paragraph-hidden4").style.display = "block";
});
bildScale4.addEventListener("mouseout", () => {
  bildScale4.style.height = "27rem";
  document.getElementById("paragraph-hidden4").style.display = "none";
});

bildScale5.addEventListener("click", () => {
  bildScale5.style.height = "20rem";
  document.getElementById("paragraph-hidden5").style.display = "block";
});
bildScale5.addEventListener("mouseout", () => {
  bildScale5.style.height = "27rem";
  document.getElementById("paragraph-hidden5").style.display = "none";
});

const menu = document.getElementById("menu");
const close = document.getElementById("close");

menu.addEventListener("click", () => {
  document.getElementById("sliderPage").style.display = "block";
  document.getElementById("container").style.display = "none";
  document.getElementById("container2").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementsByTagName("body")[0].style.background = "#252422";
  document.getElementsByTagName("body")[0].style.backgroundImage =
    "url('assets/img/base.png')";
});

close.addEventListener("click", () => {
  document.getElementById("sliderPage").style.display = "none";
  document.getElementById("container").style.display = "block";
  document.getElementById("container2").style.display = "block";
  document.getElementById("footer").style.display = "block";
  document.getElementsByTagName("body")[0].style.background = "#f4f4f4";
  document.getElementsByTagName("body")[0].style.backgroundImage =
    "url('assets/img/base.png')";
});
