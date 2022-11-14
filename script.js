var GAME = {
    width: 1160,
    height: 680,
    image: new Image(),
    Score: 0,
}


var canvas = document.getElementById("canvas");
canvas.width = GAME.width;
canvas.height = GAME.height;
var canvasContext = canvas.getContext("2d");

var song = new Audio ();

song.src = "music.mp3"

var WINSCREEN ={
    width: 1160,
    height: 680,
    image: new Image(),
}




var MENU_BUTTON = {
    x: 920,
    y: 20,
    width: 200,
    height: 75,
    image: new Image(),
}

var CONTINUE_BUTTON = {
    x: 480,
    y: 320,
    width: 250,
    height: 90,
    image: new Image (),
}

var RESTART_BUTTON = {
    x: 480,
    y: 200,
    width: 250,
    height: 90,
    image: new Image (),
}



var drawStatus;

function drawMenuButton() {
    canvasContext.drawImage(MENU_BUTTON.image, MENU_BUTTON.x, MENU_BUTTON.y, MENU_BUTTON.width, MENU_BUTTON.height);
}

function drawContinueButton() {
    canvasContext.drawImage(CONTINUE_BUTTON.image, CONTINUE_BUTTON.x, CONTINUE_BUTTON.y, CONTINUE_BUTTON.width, CONTINUE_BUTTON.height);
}

function drawRestartButton() {
    canvasContext.drawImage(RESTART_BUTTON.image, RESTART_BUTTON.x, RESTART_BUTTON.y, RESTART_BUTTON.width, RESTART_BUTTON.height);
}


function drawFrame () {
    canvasContext.clearRect(0, 0, GAME.width, GAME.height);
    drawBackground();
    drawMenuButton();
    drawBall();
    drawRacket();
    drawScore();
}

function drawMenu() {
    drawContinueButton();
    drawRestartButton();
}


function isOnMenuButton(event) {
    if (((event.x >= MENU_BUTTON.x) && (event.x <= MENU_BUTTON.x + MENU_BUTTON.width)) &&
        ((event.y >= MENU_BUTTON.y) && (event.y <= MENU_BUTTON.y + MENU_BUTTON.height))) {
        return true;
    }
}


function openMenu(event) {
    if (isOnMenuButton(event)) {
        cancelAnimationFrame(drawStatus);
        window.addEventListener("click", closeMenu);
        cancelEventListeners();
        drawMenu();
    }
}

function isOnContinueButton(event) {
    if (((event.x >= CONTINUE_BUTTON.x) && (event.x <= CONTINUE_BUTTON.x + CONTINUE_BUTTON.width)) &&
        ((event.y >= CONTINUE_BUTTON.y) && (event.y <= CONTINUE_BUTTON.y + CONTINUE_BUTTON.height))) {
        return true;
    }
}

function closeMenu(event) {
    if (isOnContinueButton(event)) {
        window.removeEventListener("click", closeMenu);
        initEventsListeners();
        play();
    }
    if (isOnRestartButton(event)) {
        BALL.x = 180;
        BALL.y = 80;
        BALL.xDirection = 3;
        BALL.yDirection = 5;
        GAME.Score = 0;
        window.removeEventListener("click", closeMenu);
        initEventsListeners();
        play()
    }
}

function isOnRestartButton(event) {
    if (((event.x >= RESTART_BUTTON.x) && (event.x <= RESTART_BUTTON.x + RESTART_BUTTON.width)) &&
        ((event.y >= RESTART_BUTTON.y) && (event.y <= RESTART_BUTTON.y + RESTART_BUTTON.height))) {
        return true;
    }
}


function cancelEventListeners() {
    window.removeEventListener("mousemove", onCanvasMouseMove);
    window.removeEventListener("keydown", onCanvasKeyDown);
    window.removeEventListener("keydown", openMenu)
    window.removeEventListener("click", openMenu)
}


function drawScore() {
    canvasContext.fillStyle = "white";
    canvasContext.font = '60px serif';
    canvasContext.fillText("Score: " + GAME.Score, 70, 70);
}

function drawWinScreen() {
    canvasContext.clearRect(0, 0, GAME.width, GAME.height);
    drawBackground();
    canvasContext.drawImage(WINSCREEN.image, 0, 0, WINSCREEN.width, WINSCREEN.height)
}


function drawBackground() {
    canvasContext.drawImage(GAME.image, 0, 0, GAME.width, GAME.height);
}

var RACKET = {
    x: 0,
    y: 500,
    width: 130,
    height: 180,
    xDirection: 30,
    score: 0,
    image: new Image(),
}

function drawRacket() {
    canvasContext.drawImage(RACKET.image, RACKET.x, RACKET.y, RACKET.width, RACKET.height)
}


var BALL = [{
    x: 1000,
    y: -300,
    radius: 70,
    xDirection: 3,
    yDirection: 1,
    image: new Image(),
    healthy: true
},
{
    x: 500,
    y: -86,
    radius: 70,
    xDirection: 3,
    yDirection: 2,
    image: new Image(),
    healthy: true
},
{
    x: 100,
    y: -450,
    radius: 70,
    xDirection: 3,
    yDirection: 5,
    image: new Image(),
    healthy: true
},
{
    x: 150,
    y: -7,
    radius: 70,
    xDirection: 3,
    yDirection: 1,
    image: new Image(),
    healthy: true
},
{
    x: 200,
    y: -16,
    radius: 70,
    xDirection: 3,
    yDirection: 2,
    image: new Image(),
    healthy: true
},
{
    x: 250,
    y: -45,
    radius: 70,
    xDirection: 3,
    yDirection: 2,
    image: new Image(),
    healthy: true
},
{
    x: 300,
    y: -56,
    radius: 70,
    xDirection: 3,
    yDirection: 1,
    image: new Image(),
    healthy: true
},
{
    x: 350,
    y: -34,
    radius: 70,
    xDirection: 3,
    yDirection: 2,
    image: new Image(),
    healthy: true
},
{
    x: 400,
    y: -66,
    radius: 70,
    xDirection: 3,
    yDirection: 3,
    image: new Image(),
    healthy: true
},
{
    x: 450,
    y: -10,
    radius: 70,
    xDirection: 3,
    yDirection: 2,
    image: new Image(),
    healthy: true
},
{
    x: 500,
    y: -29,
    radius: 70,
    xDirection: 3,
    yDirection: 1,
    image: new Image(),
    healthy: false
},
{
    x: 550,
    y: -95,
    radius: 70,
    xDirection: 3,
    yDirection: 3,
    image: new Image(),
    healthy: false
},
{
    x: 700,
    y: -300,
    radius: 70,
    xDirection: 3,
    yDirection: 2,
    image: new Image(),
    healthy: false
},
{
    x: 960,
    y: -600,
    radius: 70,
    xDirection: 3,
    yDirection: 1,
    image: new Image(),
    healthy: false
}

]

function drawBall() {
    for (var i = 0; i < BALL.length; i++) {
        canvasContext.drawImage(BALL[i].image, BALL[i].x, BALL[i].y, BALL[i].radius, BALL[i].radius)
    }
}


function updateBall() {
    for (var i = 0; i < BALL.length; i++) {
        BALL[i].y += BALL[i].yDirection
        if (BALL[i].y >= GAME.height) {
            BALL[i].y = 0;
            initBallPlace(i);

        }

        if ((BALL[i].y + BALL[i].radius >= RACKET.y) && (BALL[i].x + BALL[i].radius >= RACKET.x) && (BALL[i].x <= RACKET.x + RACKET.width)) {
            BALL[i].y = 0;
            initBallPlace(i);
            if (BALL[i].healthy === true) {
                GAME.Score = GAME.Score + 1;
            }
            if (BALL[i].healthy === false) {
                GAME.Score = GAME.Score - 5;
            }
            console.log("Score: " + GAME.Score);
        }

    }

}


function initEventsListeners() {
    window.addEventListener("mousemove", onCanvasMouseMove);
    window.addEventListener("keydown", onCanvasKeyDown);
    window.addEventListener("click", openMenu);

}

function initBackgroundImage() {
    GAME.image.src = "cafe.jpg";
    MENU_BUTTON.image.src = "pause.png";
    BALL[0].image.src = "roll.png";
    BALL[1].image.src = "roll.png";
    BALL[2].image.src = "onigiri.png";
    BALL[3].image.src = "onigiri.png";
    BALL[4].image.src = "fish.png";
    BALL[5].image.src = "fish.png";
    BALL[6].image.src = "chips.png";
    BALL[7].image.src = "chips.png";
    BALL[8].image.src = "sushi.png";
    BALL[9].image.src = "sushi.png";
    BALL[10].image.src = "burger.png";
    BALL[11].image.src = "burger.png";
    BALL[12].image.src = "pelmeni.png";
    BALL[13].image.src = "potato.png";
    RACKET.image.src = "cat.png";
    RESTART_BUTTON.image.src = "RESTART_button.png";
    CONTINUE_BUTTON.image.src = "CONTINUE_button.png";
    WINSCREEN.image.src = "winscreen.jpg";
}


function onCanvasKeyDown(event) {

    if (event.key === "ArrowLeft") {
        RACKET.x = RACKET.x - RACKET.xDirection;
    }
    if (event.key === "ArrowRight") {
        RACKET.x = RACKET.x + RACKET.xDirection;
    }
    clampRacketPosition();
}

function onCanvasMouseMove(event) {
    RACKET.x = event.clientX;
    clampRacketPosition();
}

function clampRacketPosition() {
    if (RACKET.x < 0) {
        RACKET.x = 0;
    }
    if (RACKET.x + RACKET.width > GAME.width) {
        RACKET.x = GAME.width - RACKET.width;
    }
}

function initBallPlace(index) {
    BALL[index].x = Math.random() * GAME.width;
}

function play() {
    song.play();
    if (GAME.Score < 30) {
        drawFrame();
        updateBall();
        drawStatus = requestAnimationFrame(play);
    }
    if (GAME.Score === 30) {
        drawWinScreen()
    }

}

initEventsListeners();
initBackgroundImage();
play();