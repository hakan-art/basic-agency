const web = document.getElementById("web");
const ad = document.getElementById("ad");
const awwwards = document.getElementById("awwwards");
const dag = document.getElementById("dag");
const one = document.getElementById("one");
const the = document.getElementById("the");

web.addEventListener("mouseover", () => {
  document.getElementById("hover1").style.display = "block";
  document.getElementById("hover1").style.marginTop = "-9rem";
  document.getElementById("hover1").style.width = "90%";
});
web.addEventListener("mouseout", () => {
  document.getElementById("hover1").style.display = "none";
});

ad.addEventListener("mouseover", () => {
  document.getElementById("hover2").style.display = "block";
  document.getElementById("hover2").style.marginTop = "-4rem";
  document.getElementById("hover2").style.width = "90%";
});
ad.addEventListener("mouseout", () => {
  document.getElementById("hover2").style.display = "none";
});

awwwards.addEventListener("mouseover", () => {
  document.getElementById("hover3").style.display = "block";
  document.getElementById("hover3").style.width = "90%";
});
awwwards.addEventListener("mouseout", () => {
  document.getElementById("hover3").style.display = "none";
});

dag.addEventListener("mouseover", () => {
  document.getElementById("hover4").style.display = "block";
  document.getElementById("hover4").style.marginTop = "6rem";
  document.getElementById("hover4").style.width = "90%";
});
dag.addEventListener("mouseout", () => {
  document.getElementById("hover4").style.display = "none";
});

one.addEventListener("mouseover", () => {
  document.getElementById("hover5").style.display = "block";
  document.getElementById("hover5").style.marginTop = "12rem";
  document.getElementById("hover5").style.width = "90%";
});
one.addEventListener("mouseout", () => {
  document.getElementById("hover5").style.display = "none";
});

the.addEventListener("mouseover", () => {
  document.getElementById("hover6").style.display = "block";
  document.getElementById("hover6").style.marginTop = "18rem";
  document.getElementById("hover6").style.width = "90%";
});
the.addEventListener("mouseout", () => {
  document.getElementById("hover6").style.display = "none";
});
