var s = 83;
var w = 87;
var a = 65;
var d = 68;
var x = 400;
var myXs = [];
var myYs = [];
var myDiameters = [];
var y = 575;
var x2 = 200;
var y2 = 100;
var x3 = 200;
var y3 = 200;
var mousex = 0;
var mousey = 0;
var obsizex = 0;
var obsizey = 0;
var movement2;
var movement3;
var fontsize = 650;

function setup() {
    createCanvas(800, 600);
    for (var i = 0; i < 3; i++) {
        myXs[i] = getRandomNumber(800);
        myYs[i] = getRandomNumber(600);
        myDiameters[i] = getRandomNumber(20);
    }
    movement2 = floor(random() * 10) + 1;
    movement3 = (floor(random() * 10) + 1) * (-1);
}

function draw() {
    background(123, 28, 38);
    PlayerSpawn(255, x, y, 50)
    PlayerMove();
    fill(100, 150, 200)
    rect(400, 300, mousex, mousey)
    for (var i = 0; i < myXs.length; i++) {
        circle(myXs[i], myYs[i], myDiameters[i]);
    }
    BorderGen();
    ExitGen();
    TextGen();
    obmove();
}

function PlayerSpawn(
    color, x, y, size) {
    fill(color);
    circle(x, y, size);
    PlayerMove;
}

function PlayerMove() {
    if (keyIsDown(d)) {
        x += 5;
    }
    if (keyIsDown(a)) {
        x -= 5;
    }
    if (x >= 775) {
        x = 775;
    }
    if (x <= 25) {
        x = 25;
    }
    if (keyIsDown(s)) {
        y += 5;
    }
    if (keyIsDown(w)) {
        y -= 5;
    }
    if (y >= 575) {
        y = 575;
    }
    if (y <= 25) {
        y = 25;
    }
}

function BorderGen() {
    fill(15)
    rect(0, 0, 800, 10)
    fill(15)
    rect(0, 590, 800, 10)
    fill(15)
    rect(0, 0, 10, 600)
    fill(15)
    rect(790, 0, 10, 600)
}

function ExitGen() {
    fill(200)
    rect(300, 0, 200, 50)
}

function TextGen() {
    fill(100, 100, 255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text('YOU WIN!', 400, fontsize);

    if (x >= 300 && x <= 500 && y <= 50) {
        fontsize = 25
    }
}

function mouseClicked() {
    mousex = 100;
    mousey = 100;
}

function obmove() {
    for (var i = 0; i < myXs.length; i++) {
        if (myXs[i] <= -50 && myXs[i] > 850) {
            myXs[i] = 400
            myYs[i] = 300
        }
        else if (myXs[i] >= 800) {
            myXs[i] = 10
        }
        else if (myXs[i] <= 0) {
            myXs[i] = 790
        }
        myXs[i] += movement2;

        if (myYs[i] <= -50 && myYs[i] > 650) {
            myXs[i] = 400
            myYs[i] = 300
        }
        else if (myYs[i] >= 600) {
            myYs[i] = 10
        }
        else if (myYs[i] <= 0) {
            myYs[i] = 590
        }
        myYs[i] += movement2;
    }
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function mouseClicked() {
    mousex = 100;
    mousey = 100;
}