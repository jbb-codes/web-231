"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Jarren Bess
      Date: Oct 4, 2025

      Filename: project06-03.js
*/

const useShip = document.getElementById("useShip");

useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {
  if (useShip.checked) {
    document.billShip.firstnameBill.value =
      document.billShip.firstnameShip.value;

    document.billShip.lastnameBill.value = document.billShip.lastnameShip.value;

    document.billShip.address1Bill.value = document.billShip.address1Ship.value;

    document.billShip.address2Bill.value = document.billShip.address2Ship.value;

    document.billShip.cityBill.value = document.billShip.cityShip.value;

    document.billShip.countryBill.value = document.billShip.countryShip.value;

    document.billShip.codeBill.value = document.billShip.codeShip.value;

    document.billShip.stateBill.selectedIndex =
      document.billShip.stateShip.selectedIndex.value;
  }
}

const formElements = document.querySelectorAll('input[type="text"]');
const fieldCount = formElements.length;
const errorBox = document.getElementById("errorBox");

for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}
