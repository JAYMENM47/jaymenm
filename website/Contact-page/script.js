"use strict";

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  //? Validate Full Name
  const fnameInput = document.getElementById("fname");
  const fnameError = document.getElementById("fnameError");
  if (fnameInput.value.trim() === "") {
    showError("Full Name is required.", fnameError);
    fnameError.style.color = "red";
    fnameInput.style.border = "1px solid red";
    event.preventDefault(); //? Prevent form submission
  } else if (!fnameInput) {
    showError(`Full Name is required.`, fnameError);
  } else {
    hideError(fnameError);
  }

  //? Validate Email
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!validateEmail(emailInput.value)) {
    showError("Please enter a valid email address.", emailError);
    emailError.style.color = "red";
    emailInput.style.border = "1px solid red";
    event.preventDefault(); //? Prevent form submission
  } else if (!emailInput) {
    showError(`Please enter your Email address`, emailError);
  } else {
    hideError(emailError);
  }

  //? Validate Phone
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");
  if (!validatePhone(phoneInput.value)) {
    showError("Please enter a valid phone number.", phoneError);
    phoneError.style.color = "red";
    phoneInput.style.border = "1px solid red";
    event.preventDefault(); //? Prevent form submission
  } else if (!phoneInput) {
    showError("Please enter your phone number", phoneError);
  } else {
    hideError(phoneError);
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^07\d{8}$/; //?  Assumes a simple pattern for UK mobile numbers
  return phoneRegex.test(phone);
}

function showError(message, errorElement) {
  errorElement.textContent = message;
}

function hideError(errorElement) {
  errorElement.textContent = "";
}

// ? sidebar Section
const open = document.querySelector(".open");
open.addEventListener("click", function () {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "flex";
});

const close = document.querySelector(".close");
close.addEventListener("click", function () {
  const sidebar = document.querySelector(".side-bar");
  sidebar.style.display = "none";
});
