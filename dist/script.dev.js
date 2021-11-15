"use strict";

var landingPage = document.querySelector(".landing-page");
var playBtn = document.querySelector(".landing-page__button");
var gameContainer = document.querySelector(".game");
playBtn.addEventListener("click", function () {
  gameContainer.classList.remove("hidden");
});