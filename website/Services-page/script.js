"use strict";

const btn = document.querySelector(".arrow");

btn.addEventListener("click", function () {
  const targetElement = document.getElementById("ph");

  if (targetElement) {
    console.log("is present");
    targetElement.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("is absent");
  }
});

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
