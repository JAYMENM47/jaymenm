"use strict";

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
