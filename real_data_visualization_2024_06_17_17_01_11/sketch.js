// data about Currency Rates
let widthOffset = 25; // distance between boxes
let margin = 25; // margin from the edges of the canvas
let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function setup() {
  createCanvas(700, 300);
  background("#262436");
  showMonths();
}

function showMonths() {
  let xPos = margin; // Starting x position
  let yPos = height - margin; // Starting y position

  for (let i = 0; i < monthNames.length; i++) {
    let monthName = monthNames[i];
    let monthIndex = i % 12; // Get month index cyclically
    let rateSize = map(monthIndex, 0, 11, 5, 100); // Adjust size based on month

    // Assign colors based on month
    let colorValue = getColorForMonth(monthIndex);

    // Draw rectangle
    stroke(colorValue);
    fill(colorValue);
    rect(xPos, yPos - rateSize, widthOffset, rateSize); // Adjusted size

    // Display month name
    fill(255);
    noStroke();
    textFont('verdana');
    textSize(18);
    textAlign(CENTER);
    text(monthName, xPos + widthOffset / 3, yPos + 15);

    // Move x position for the next rectangle
    xPos += widthOffset + margin;
  }

  // Draw title
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text("Months", width / 4, 60);
}

function getColorForMonth(monthIndex) {
  // Example color assignment logic, modify as needed
  if (monthIndex < 6) {
    return "#57295F"; 
  } else if (monthIndex < 9) {
    return "#2393C9"; 
  } 
  else {
    return "#25DFCD"; 
  }
}

function draw() {
  // No need for looping here
}
