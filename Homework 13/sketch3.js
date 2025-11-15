var x = 50;
var y = 50;
var diameter = 25;
var mousex = 0;
var mousey = 0;
var s = 83;
var w = 87;
var a = 65;
var d = 68;
var movement2;
var myXs = []; // create an array for the x coordinate
var myYs = []; // create an array for the y coordinate
var myDiameters = []; // create array for the diameter of circles
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
    // create a for loop here to create the circles
    for (var i = 0; i < 5; i++) {
        // get all the random numbers to create a circles
        myXs[i] = getRandomNumber(800);
        myYs[i] = getRandomNumber(600);
        myDiameters[i] = getRandomNumber(100);
    }
      movement2 = getRandomNumber(10)/2+1;
  movement3 = (floor(random() * 10) + 1) * (-1);

}

function draw() {
    background(0);
    fill(24, 200, 29);
    circle(x, y, diameter);


    for (var i = 0; i < myXs.length; i++) {
        // concentric circle randomly using arrays
        circle(myXs[i], myYs[i], myDiameters[i]);
    }
    fknmove();
}




function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

function fknmove() {
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