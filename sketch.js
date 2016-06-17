var walk;
var walkers = [];
var numWalkers = 60;
var padding = 100;

function setup() {
  createCanvas(screen.width,screen.height);
  for(var i = 0; i < numWalkers; i++) {
    walk = new Walker();
    walkers.push(walk);
  }
  
}

function draw() {

  push();
  for (var i = 0; i < numWalkers; i++) {
    translate(0, (height-padding)/numWalkers);
    walkers[i].update();
    walkers[i].display();

  }
  pop();
  border();
}

function border() {
  noStroke();
  fill(255);
  rect(0,0, padding, height);
   rect(width - padding ,0, padding, height);
   rect(0,0,width, padding)
      rect(0,height-padding,width, padding)
  
}

function mouseReleased() {

  fullscreen(true);
  
}
