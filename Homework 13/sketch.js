var s = 83;
var w = 87;
var a = 65;
var d = 68;
var x = 400;
var y = 575;
var x2 = 100;
var x3 = 200;
var y2 = 100;
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
  movement2 = floor(random() * 10) + 1;
  movement3 = (floor(random() * 10) + 1) * (-1);
}

function draw() {
  background(123, 28, 38);
  PlayerSpawn(255, x, y, 50)
  PlayerMove();
  ObstacleSpawn1(100,x2,y2,40,120,130,x3,y3,120,40,175,350,250,mousex,mousey);
  ObstacleMove1();
  ObstacleMove2();
  BorderGen();
  ExitGen();
  TextGen();
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
      y = 25; }
}

function ObstacleSpawn1(
  colorfill, xob1, yob1, size1, size2, colorfill2, xob2, yob2, size3, size4,colorfillsq,xsq,ysq,sizesq1,sizesq2) {
  fill(colorfill);
  rect(xob1, yob1, size1, size2);
  fill(colorfill2);
  rect(xob2, yob2, size3, size4);
  fill(colorfillsq);
  rect(xsq,ysq,sizesq1,sizesq2);
}

function ObstacleMove1() {
  if (x2 <= -50 && x2 > 850) {
    x2 = 400
    y2 = 300
  }
  else if (x2 >= 800) {
    x2 = 10
  }
  else if (x2 <= 0) {
    x2 = 790
  }
  x2 += movement2;

  if (y2 <= -50 && y2 > 650) {
    x2 = 400
    y2 = 300
  }
  else if (y2 >= 600) {
    y2 = 10
  }
  else if (y2 <= 0) {
    y2 = 590
  }
  y2 += movement2;
}

function ObstacleMove2() {
  if (x3 <= -50 && x3 > 850) {
    x3 = 400
    y3 = 300
  }
  else if (x3 >= 800) {
    x3 = 10
  }
  else if (x3 <= 0) {
    x3 = 790
  }
  x3 += movement3;

  if (y3 <= -50 && y3 > 650) {
    x3 = 400
    y3 = 300
  }
  else if (y3 >= 600) {
    y3 = 10
  }
  else if (y3 <= 0) {
    y3 = 590
  }
  y3 += movement3;
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