var word ="Stay busy, So you don,t have time to be sad" // string data type
function setup() {
  createCanvas(400, 400);
  background(0) // gray color bg
  fill ("#7AA6B2") // color of the word 
  textSize (20)
  textAlign(CENTER)
text(word,width/2, height/2); // text, x,y

text (textWidth, (word), width/3,height/3 + 50);
}