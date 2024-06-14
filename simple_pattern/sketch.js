var rows = 5;
var cols = 5;
var distanceX = 90;
var distanceY = 80;

var palette = ["#44b4a8", "#AB50DD", "#f1ac9d"];

function setup() {
	createCanvas(400, 400);
	//you can call the function to automatically trigger one random 
	mousePressed();
}

function mousePressed() {
	background(0);
	rectMode(CENTER);
	noStroke();
	colorMode(HSB);
	
	for (var r = 1; r < rows; r++) {
		for (var c = 1; c < cols; c++) {
			
			var randomColor = random(palette);
			fill(randomColor);
			
			var size = random(80,30);
			
			print("the random size is "+size);
			
			//randomize a number between 0 and 2 (floor rounds down to the integer so 3 never happens)
			var shape = floor(random(0, 0)); 
			
			//use if to choose between a shape or another one or no shape when random number is 2
			if(shape == 0) {
				ellipse(c*distanceX, r*distanceY, size, size);
			}
			if(shape == 1) {
				ellipse(c*distanceX, r*distanceY, size, size);
			}
			
		}
	}
}