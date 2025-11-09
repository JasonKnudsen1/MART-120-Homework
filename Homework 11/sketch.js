

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
  if (keyIsDown(68)) {
    x += 5;
  }
  if (keyIsDown(65)) {
    x -= 5;
  }

  if (x >= 775) {
    x = 775;
  }
  if (x <= 25) {
    x = 25;
  }
  if (keyIsDown(83)) {
    y += 5;
  }
  if (keyIsDown(87)) {
    y -= 5;
  }
  if (y >= 575) {
    y = 575;
  }
  if (y <= 0) {
    y = 0;
  }

  fill(255)
  circle(x, y, 50);



  fill(300, 100, 200)
  rect(x2, y2, 120, 40);

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


  fill(200, 300, 100)
  rect(x3, y3, 220, 40);
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

  fill(100, 200, 300)
  rect(350, 250, mousex, mousey)

  fill(200)
  rect(300, 0, 200, 50)

  fill(100,100,255)
  textAlign(CENTER, CENTER)
  textSize(24)
  text('YOU WIN!', 400, fontsize);

  if (x >= 300 && x <= 500 && y <= 50)
{
  fontsize = 25
}
}


function mouseClicked() {
  mousex = 100;
  mousey = 100;

}