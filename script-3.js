// *--------------Add-ons page----------------*

const backButton3 = document.getElementById("addons-back");
const nextButton3 = document.getElementById("addons-next");

backButton3.addEventListener("click", () => {
  addonsPage.style.display = "none";
  planPage.style.display = "block";
  step3.classList.remove("active");
  step2.classList.add("active");
});

nextButton3.addEventListener("click", () => {
  addonsPage.style.display = "none";
  finishPage.style.display = "block";
  step3.classList.remove("active");
  step4.classList.add("active");
});

// *-------------Finish page------------*

const backbutton4 = document.getElementById("finish-back");
const nextbutton4 = document.getElementById("finish-next");
const changePlan = document.getElementById("change");

backbutton4.addEventListener("click", () => {
  finishPage.style.display = "none";
  addonsPage.style.display = "block";
  step4.classList.remove("active");
  step3.classList.add("active");
});

nextbutton4.addEventListener("click", () => {
  finishPage.style.display = "none";
  thankYouPage.style.display = " block";
  step4.classList.remove("active");
});

changePlan.addEventListener("click", () => {
  finishPage.style.display = "none";
  planPage.style.display = " block";
  step4.classList.remove("active");
  step2.classList.add("active");
});
