var numFrames = 6;

var frame = 0

var images = new Array(numFrames);



function preload() {

    images[0] = loadImage("Orange1.jpeg");

    images[1] = loadImage("Orange2.jpeg");

    images[2] = loadImage("Orange3.jpeg");

    images[3] = loadImage("Orange4.jpeg");

    images[4] = loadImage("Orange5.jpeg");

    images[5] = loadImage("Orange6.jpeg");

}

function setup() {

    createCanvas(600, 400);

    frameRate(15);

    background(255);

}



function draw() {

background(255);

frame++;

if (frame == numFrames) frame = 0;

image(images[frame], mouseX - 75, mouseY - 100);

}