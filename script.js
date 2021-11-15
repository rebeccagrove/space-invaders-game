const landingPage = document.querySelector(".landing-page");
const playBtn = document.querySelector(".landing-page__button");
const gameContainer = document.querySelector(".game");

playBtn.addEventListener("click", () => {
    landingPage.classList.add ("hidden");
    gameContainer.classList.remove("hidden");
})