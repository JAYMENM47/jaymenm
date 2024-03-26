"use strict";

let index = 0;
displayImages();

function displayImages() {
  const images = document.getElementsByClassName("image");

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  index++;
  if (index > images.length) {
    index = 1;
  }

  images[index - 1].style.display = "block";

  setTimeout(displayImages, 5000); // Call the function again after 2 seconds
}

// ? FAQ Section

function toggleAnswer(id) {
  let answer = document.getElementById("answer" + id);
  let icon = document.querySelector(".faq-item:nth-child(" + id + ") .icon");
  answer.classList.toggle("show");
  icon.textContent = answer.classList.contains("show") ? "" : "";
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
