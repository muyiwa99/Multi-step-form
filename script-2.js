// *----------------Plan page-----------------*
// Toggle switch
const toggleSwitch = document.querySelector("#switch");

// Monthly Prices
const monthlyPrices = document.querySelectorAll(".monthly");

// Yearly prices
const yearyPrices = document.querySelectorAll(".yearly");

// AddOns page prices
const addOnOne = document.getElementById("addons-1");
const addOnTwo = document.getElementById("addons-2");
const addOnThree = document.getElementById("addons-3");

// Plan page buttons
const goBack = document.getElementById("plan-b_0");
const planNextButton = document.getElementById("plan-b");

// finish page plan type
let lineTwo = document.querySelector(".two");

// Sets the defult Plan type on the finsih page to (Monthly), as the monthly prices are displayed by default.
lineTwo.textContent = "(monthly)";

let toggleSelection = toggleSwitch.checked ? "yearly" : "monthly";

let selectedContainerData = {
  yearly: null,
  monthly: null,
};

// This displays the price of the selected price container on the finish page
const selectedContainerPrice = document.getElementById("price");

let planString;
let PlaNum;
// This function updates the selectedContainerPrice based on the toggleSelection of the selectedContainerData.
function updateSelectedPrice(plan) {
  selectedContainerPrice.textContent = `${plan}`;
  console.log(selectedContainerPrice.textContent);
  planString = selectedContainerPrice.innerHTML;
  PlaNum = planString.match(/(\d+)/);

  PlaNum = PlaNum[0];
  console.log(PlaNum);
}

const tPlan = document.querySelector(".t-plan");
// This event listener checks for when the switch is checked.
toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    // When the toggle is checked, the monthly prices are hidden
    monthlyPrices.forEach((price) => {
      price.style.visibility = "hidden";
    });
    // Then the yearly prices are then displayed, the function updates the prices to the yearly prices.
    yearyPrices.forEach((price) => {
      price.style.visibility = "visible";
      updateSelectedPrice(selectedContainerData[toggleSelection]);
      lineTwo.textContent = "(Yearly)";
      toggleSelection = this.checked = "yearly";
      addOnOne.textContent = "+10$/Yr";
      addOnTwo.textContent = "+20$/Yr";
      addOnThree.textContent = "+20$/Yr";
      tPlan.textContent = "(per Year)";
    });
  } else {
    // vice  versa for the monthly prices, the toggle select uses a ternary operator to check what prices to set.
    monthlyPrices.forEach((price) => {
      price.style.visibility = "visible";
      updateSelectedPrice(selectedContainerData[toggleSelection]);
      lineTwo.textContent = "(Monthly)";
      toggleSelection = this.checked ? "yearly" : "monthly";
      addOnOne.textContent = "+1$/Mo";
      addOnTwo.textContent = "+2$/Mo";
      addOnThree.textContent = "+2$/Mo";
      tPlan.textContent = "(per month)";
    });
    yearyPrices.forEach((price) => {
      price.style.visibility = "hidden";
    });
  }
});

//--------Buttons--------
// Select plan page buttons
goBack.addEventListener("click", function () {
  planPage.style.display = "none";
  personalPage.style.display = "block";
  step2.classList.remove("active");
  step1.classList.add("active");
});
// Select plan page buttons
planNextButton.addEventListener("click", function () {
  validatePlan();
});

// Vallidates that a plan has been selected
function validatePlan() {
  if (selected) {
    planPage.style.display = "none";
    addonsPage.style.display = "block";
    step2.classList.remove("active");
    step3.classList.add("active");
  } else {
    alert("Please select a plan");
  }
}

// A variable to save the selcted plan name
let selectedPlan = null;

// This varibale displays the selcted plan name
const lineOne = document.querySelector(".one");

// Select your plan boxes
const selectPlan = document.querySelectorAll(".selection-content");

let selected = false;

// When a plan is clicked, a click event listener is triggered, which first removes the "s-checked" class from all plans and then adds the "s-checked" class to the clicked container.
selectPlan.forEach((item) => {
  item.addEventListener("click", () => {
    selected = true;

    // Removes class from other containers that were not clicked.
    selectPlan.forEach((c) => c.classList.remove("s-checked"));
    // Adds it to clicked
    item.classList.add("s-checked");

    // Getting the plan name of the clicked container
    selectedPlan = item
      .querySelector(".option")
      .querySelector(".test").textContent;

    const prices = document.querySelector(".option");
    selectedContainerData.monthly = item
      .querySelector(".option")
      .querySelector(".monthly").textContent;
    selectedContainerData.yearly = item
      .querySelector(".option")
      .querySelector(".yearly")
      .querySelector(".yr").textContent;

    updateSelectedPlan(selectedPlan);
    updateSelectedPrice(selectedContainerData[toggleSelection]);
  });
});

// This function updates the plan type on the finish page based on the selectedPlan.
function updateSelectedPlan(data) {
  lineOne.textContent = `${data}`;
}

const addOnsSelection1 = document.querySelector(".add-1");
const addOnsSelection2 = document.querySelector(".add-2");
const addOnsSelection3 = document.querySelector(".add-3");

let addOneName = document.querySelector(".add-1_name");
let addTwoName = document.querySelector(".add-2_name");
let addThreeName = document.querySelector(".add-3_name");

let addPriceOne = document.getElementById("add-price_1");
let addPriceTwo = document.getElementById("add-price_2");
let addPriceThree = document.getElementById("add-price_3");

addOnsSelection1.addEventListener("change", function () {
  if (this.checked) {
    addOneName.textContent = document.querySelector(".d-name").textContent;
    addPriceOne.textContent = document.querySelector("#addons-1").textContent;
  } else {
    addOneName.textContent = "";
    addPriceOne.textContent = "";
  }
});

addOnsSelection2.addEventListener("change", function () {
  if (this.checked) {
    addTwoName.textContent = document.querySelector(".s-name").textContent;
    addPriceTwo.textContent = document.querySelector("#addons-2").textContent;
  } else {
    addTwoName.textContent = "";
    addPriceTwo.textContent = "";
  }
});
// These 1st variable holds the string of the addon price e.g. '+2$/Mo'. The second extracts the number from the string, this will be used to calculate the total
addOnsSelection3.addEventListener("change", function () {
  if (this.checked) {
    addThreeName.textContent = document.querySelector(".c-name").textContent;
    addPriceThree.textContent = document.querySelector("#addons-3").textContent;
    // Gets the current string displayed dependant on the users toggle selcetion
    // addSelectString3 = document.querySelector("#addons-3").innerHTML;
  } else {
    addThreeName.textContent = "";
    addPriceThree.textContent = "";
  }
});
