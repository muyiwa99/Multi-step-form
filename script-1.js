// Personal Page- Vallidation
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phonenumber = document.getElementById("number");
const personalPage = document.querySelector(".main-content_personal");
const planPage = document.querySelector(".main-content_plan");
// Next step button
const nextStepButton = document.getElementById("button");

const addonsPage = document.querySelector(".main-content_addons");

const finishPage = document.querySelector(".main-content_finish");

const thankYouPage = document.querySelector(".main-content_thank-you");

// Steps counter

const step1 = document.getElementById("step-1");
const step2 = document.getElementById("step-2");
const step3 = document.getElementById("step-3");
const step4 = document.getElementById("step-4");

// A function that validates all the inputs
function validateInputs() {
  // Name vallidation
  if (fullName.value.trim() === "") {
    onError(fullName);
  } else {
    onSuccess(fullName);
  }
  // Email Validation
  if (email.value.trim() === "") {
    onError(email);
  } else if (!isValidEmail(email.value.trim())) {
    email.style.borderColor = "yellow";
    let emailError = document.querySelector(".email-e");
    emailError.style.visibility = "visible";
    emailError.innerHTML = "Provide valid email!";
  } else {
    onSuccess(email);
  }
  // Phonenumber
  if (phonenumber.value.trim() === "") {
    onError(phonenumber);
  } else if (isNaN(phonenumber.value)) {
    phonenumber.style.borderColor = "yellow";
    let numError = document.querySelector(".num");
    numError.innerHTML = " Numerical number only!";
    numError.style.visibility = "visible";
  } else {
    onSuccess(phonenumber);
  }

  //   Input validations
  if (phonenumber.value && isValidEmail(email.value) && phonenumber.value) {
    personalPage.style.display = "none";
    planPage.style.display = "block";
  }
}

// Email Validation
function isValidEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
// This fucntion is invoked when the input is deemed a success, the error message will be hidden and the border color of the input will change to green
function onSuccess(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("span");

  let inputElement = parent.querySelector("input");

  messageEle.style.visibility = "hidden";
  inputElement.style.borderColor = "green";
}

// This fucntion is invoked when the input is deemed a an error, the error message will be displayed and the border color of the input will change to red
function onError(input) {
  let parent = input.parentElement;
  let messageEle = parent.querySelector("span");
  messageEle.style.visibility = "visible";

  let inputElement = parent.querySelector("input");

  inputElement.style.borderColor = "red";
}

// An event listener that invokes the ValidatesInputs fuction when the 'Next Step' button is clicked.
nextStepButton.addEventListener("click", function (event) {
  event.preventDefault();
  validateInputs();
  step1.classList.remove("active");
  step2.classList.add("active");
});
