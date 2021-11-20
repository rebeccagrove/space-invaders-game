const landingPage = document.querySelector(".landing-page");
const playBtn = document.querySelector(".landing-page__button");
const gameContainer = document.querySelector(".game");
const enemyContainer = document.querySelector(".enemies");
const userShip = document.querySelector(".usership");

playBtn.addEventListener("click", () => {
    landingPage.classList.add("hidden");
    gameContainer.classList.remove("hidden");

    console.log(landingPage);
})

class Enemyship {
    constructor(imgSrc, imageAlt, className) {
        this.imgSrc = imgSrc;
        this.imageAlt = imageAlt;
        this.className = className;
    }

    createShip() {
        const enemyShipNode = document.createElement("img");
        enemyShipNode.src = this.imgSrc;
        enemyShipNode.alt = this.imageAlt;
        enemyShipNode.classList.add(this.className);
        return enemyShipNode;
    }
}

for (let i = 0; i < 20; i++) {
    const enemy = new Enemyship(
        "/assets/images/alien-10-points.png",
        "enemy-ship",
        "alien10"
    );

    enemyContainer.appendChild(enemy.createShip());
}

for (let i = 0; i < 20; i++) {
    const enemy = new Enemyship(
        "./assets/images/alien-30-points.png",
        "enemy-ship",
        "alien30"
    );

    enemyContainer.appendChild(enemy.createShip());
}

for (let i = 0; i < 10; i++) {
    const enemy = new Enemyship(
        "/assets/images/alien-50-points.png",
        "enemy-ship",
        "alien50"
    );

    enemyContainer.appendChild(enemy.createShip());
}

let userStartingPosition = 660;
console.log(userStartingPosition);
userShip.style.left = userStartingPosition + "px";
let newUserPosition;

document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "ArrowLeft") {
        newUserPosition = userStartingPosition -= 10;
        console.log(newUserPosition);
        userShip.style.left = newUserPosition + "px";

        // Now we just need to add some logic to check when the left position reaches 0
        // E.g. when it reaches the very left of the container to stop it moving any further
    }
    if (key === "ArrowRight") {
        newUserPosition = userStartingPosition += 10;
        console.log(newUserPosition);
        userShip.style.left = newUserPosition + "px";
    }

});