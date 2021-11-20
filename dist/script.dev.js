"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var landingPage = document.querySelector(".landing-page");
var playBtn = document.querySelector(".landing-page__button");
var gameContainer = document.querySelector(".game");
var enemyContainer = document.querySelector(".enemies");
var userShip = document.querySelector(".usership");
playBtn.addEventListener("click", function () {
  landingPage.classList.add("hidden");
  gameContainer.classList.remove("hidden");
  console.log(landingPage);
});

var Enemyship =
/*#__PURE__*/
function () {
  function Enemyship(imgSrc, imageAlt, className) {
    _classCallCheck(this, Enemyship);

    this.imageSrc = imgSrc;
    this.imageAlt = imageAlt;
    this.className = className;
  }

  _createClass(Enemyship, [{
    key: "createShip",
    value: function createShip() {
      var enemyShipNode = document.createElement("img");
      enemyShipNode.src = this.imgSrc;
      enemyShipNode.alt = this.imageAlt;
      enemyShipNode.classList.add(this.className);
      return enemyShipNode;
    }
  }]);

  return Enemyship;
}();

for (var i = 0; i < 10; i++) {
  var enemy = new Enemyship("/assets/images/alien-10-points.png", "enemy-ship", "alien10");
  enemyContainer.appendChild(enemy.createShip());
}

for (var _i = 0; _i < 10; _i++) {
  var _enemy = new Enemyship("/assets/images/alien-30-points.png", "enemy-ship", "alien30");

  enemyContainer.appendChild(_enemy.createShip());
}

for (var _i2 = 0; _i2 < 10; _i2++) {
  var _enemy2 = new Enemyship("/assets/images/alien-50-points.png", "enemy-ship", "alien50");

  enemyContainer.appendChild(_enemy2.createShip());
}

var userStartingPosition = 470;
console.log(userStartingPosition);
userShip.style.left = userStartingPosition + "px";
var newUserPosition;
document.addEventListener("keydown", function (event) {
  var key = event.key;

  if (key === "ArrowLeft") {
    newUserPosition = userStartingPosition -= 10;
    console.log(newUserPosition);
    userShip.style.left = newUserPosition + "px"; // Now we just need to add some logic to check when the left position reaches 0
    // E.g. when it reaches the very left of the container to stop it moving any further
  }

  if (key === "ArrowRight") {
    newUserPosition = userStartingPosition += 10;
    console.log(newUserPosition);
    userShip.style.left = newUserPosition + "px";
  }
});