var elements = [];
var numElements = 7;
var padding = 125;


function setup() {
  createCanvas(screen.width,screen.height);
  for(var i = 0; i < numElements; i++) {
    element = new Walker();
    element.test;
    elements.push(element);
  }
  // createCanvas(100, 100);
  // background(255, 0, 200);
}

function draw() {
  // if elements[0].getXPosition() > width {
  //   return;
  // }
  push();
  for (var i = 0; i < numElements; i++) {
    translate(0, 50);
    elements[i].update();
    elements[i].display();
  }
  pop();
  border();
}

function border() {
  // noStroke()
  // fill(255)
  rect(0,0, padding, height)
  // rect(width - padding ,0, padding, height)
  rect(0,0,width, padding)
  // rect(0,height-padding,width, padding)
}

function mouseReleased() {
  fullscreen(true);
}
