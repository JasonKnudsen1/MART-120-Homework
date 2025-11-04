/*
var redColor = 123;
var greenColor = 39;
var blueColor = 21;
// this function is called only once
function setup()
{

    createCanvas(800,600);
}
/* this function is called continuously
   while the sketch is open in the browser

function draw()
{
    background(220)
    fill(redColor,greenColor,blueColor);
    redColor = redColor + 1;
    greenColor++;
    blueColor++;
    textSize(32);
    text('penis', 100, 100);
}
*/
var redColor = 123;
var greenColor = 39;
var blueColor = 21;
var r = 40
var g = 40
var b = 40

var x = 100;
var x2 = 200;
var x3 = 300
var y = 200;
var y2 = 300;
var y3 = 200
var diameter = 200;


var movement;
var movement2;
var movement3;
var movement4;
var movement5;
var fsize = 25;
var fscalar = -25;
var dscalar = -25
var colorchanger = 15;
var colorchangeg = 20;
var colorchangeb = 25;

// this function is called only once
function setup() {

   createCanvas(800, 600);
   movement = floor(random() * 10) + 1;
   movement2 = floor(random() * 10) + 1;
   movement3 = floor(random() * 10) + 1;
   movement4 = floor(random() * 10) + 1;
   movement5 = floor(random() * 10) + 1;
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw() {
   background(redColor, greenColor, blueColor);
   fill(r, g, b);
   circle(x, 200, diameter);
   circle(x2, 180, 50);
   ellipse(x2, 180, 20, 50);
   circle(x, y, 50);
   ellipse(230, y, 20, 50);
   rect(140, 80, 120, 40);
   rect(180, 100, 90, 20);
   square(x3, y3, 50)
   triangle(200, 180, 200, 230, 240, 235);
   point(x2, 180);
   point(230, y);
   line(180, y2, 220, y2);
   textSize(fsize);
   text('Floating Boy', 20, 350);
   textSize(20)
   text('"by Jason Knudsen"', 200, 40)
   frameRate(20)
   if (fsize >= 125) {
      fscalar *= -1;
   }
   if (fsize <= 25) {
      fscalar *= -1;
   }
   fsize += fscalar;

   if (diameter >= 300) {
      dscalar *= -1;
   }
   if (diameter <= 200) {
      dscalar *= -1;
   }
   diameter += dscalar;

// x shenanigans
   if (x >= 800 || x <= 0) {
      movement *= -1;
      r += colorchanger;
      g += colorchangeg;
      b += colorchangeb;
   }
      x += movement;

   if (x2 >= 800 || x2 <= 0) {
      movement2 *= -1;
      r += colorchanger;
      g += colorchangeg;
      b += colorchangeb;
   }
      x2 += movement2;

   if (x3 >= 800 || x3 <= 0) {
      movement *= -1;
      r += colorchanger;
      g += colorchangeg;
      b += colorchangeb;
   }
      x3 += movement;

// y shenanigans
   if (y >= 600 || y <= 0) {
      movement *= -1;
      r += colorchanger;
      g += colorchangeg;
      b += colorchangeb;
   }
      y += movement;

   if (y2 >= 600 || y2 <= 0) {
      movement *= -1;
      r += colorchanger;
      g += colorchangeg;
      b += colorchangeb;
   }
      y2 += movement;

   if (y3 >= 600 || y3 <= 0) {
      movement2 *= -1;
      r += colorchanger;
      g += colorchangeg;
      b += colorchangeb;
   }
      y3 += movement2;



}