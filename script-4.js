// calculating the total price
// console.log(totalPrice.textContent);
let addSelectString1;
let addSelectNum1;
let addSelectString2;
let addSelectNum2;
let addSelectString3;
let addSelectNum3;
let totalPrice = document.querySelector(".totalPrice");

function totalPriceValue() {
  addOnsSelection1.addEventListener("change", function () {
    if (this.checked) {
      addSelectString1 = document.querySelector("#addons-1").innerHTML;
      console.log(addSelectString1);
      // Extracts the number using the reGex method
      addSelectNum1 = addSelectString1.match(/(\d+)/);

      addSelectNum1 = addSelectNum1[0];
      console.log(addSelectNum1);
    } else {
    }
    sumUp();
  });

  addOnsSelection2.addEventListener("change", function () {
    if (this.checked) {
      addSelectString2 = document.querySelector("#addons-2").innerHTML;
      console.log(addSelectString2);
      // Extracts the number using the reGex method
      addSelectNum2 = addSelectString2.match(/(\d+)/);

      addSelectNum2 = addSelectNum2[0];
      console.log(addSelectNum2);
    } else {
    }
    sumUp();
  });

  addOnsSelection3.addEventListener("change", function () {
    if (this.checked) {
      addSelectString3 = document.querySelector("#addons-3").innerHTML;
      console.log(addSelectString3);
      // Extracts the number using the reGex method
      addSelectNum3 = addSelectString3.match(/(\d+)/);

      addSelectNum3 = addSelectNum3[0];
      console.log(addSelectNum3);
    } else {
    }
    sumUp();
  });
}
totalPriceValue();
// Setting th values of the addons dependant on if the user ticked the checkbox
let sumUp = () => {
  if (addOnsSelection1.checked) {
    addSelectNum1;
  } else {
    addSelectNum1 = 0;
  }

  if (addOnsSelection2.checked) {
    addSelectNum2;
  } else {
    addSelectNum2 = 0;
  }

  if (addOnsSelection3.checked) {
    addSelectNum3;
  } else {
    addSelectNum3 = 0;
  }

  // Adding up the totals
  const sum = +addSelectNum1 + +addSelectNum2 + +addSelectNum3;
  totalPrice.textContent = `$${+PlaNum + sum}`;

  console.log(sum);
};
