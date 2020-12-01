function setup() {
  createCanvas(windowWidth,windowHeight);
  
    strokeWeight(4);
    stroke(60);
  }

function draw() {
    
  if (mouseIsPressed) {
      
      let c = color(255, 204, 0);
      fill(c);
      background('#F07B2C')
      
      circle(mouseX + 66, mouseY, mouseX + 66, mouseY);
      
      textSize(25);
      fill(0, 0, 0);
      text('SunnyDay', 400, 400);

  } else {
      
      background('black');
      c = color('rgb(255, 255, 255)' );
      fill(c);
      ellipse(width/2, height/ 2, 400, 400);
        
  }
  
}