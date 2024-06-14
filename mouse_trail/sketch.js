function setup() {
	createCanvas(2000, 2000);
	frameRate(100)
}

function draw() {
	fill(255,10);
	noStroke()
	rect(0,0,2000,2000);
	
	let A = random(0,255);
	let B = random(0,255);
	let C = random(0,255);
	fill(255);
	fill(A, B, C);
	ellipse(mouseX -55,mouseY,200);
	ellipse(mouseX -55,mouseY,100);
	fill(0,100);
	ellipse(mouseX,mouseY,300);
	
}