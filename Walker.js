function Walker() {
  var x = 30;
  var y = 0;
  var pos = createVector(x, y);
  var radUpperBound = 20;
  var radLowerBound = 5;
  
  var radUpper = random(radUpperBound);
  var radLower = random(radLowerBound);
  var angle = random(0,TWO_PI);
  var frequency = random(0.01,0.02);

  var radius = random(radLower, radUpper);
  
  var noiseUpperBound = 25;
  var noiseLowerBound = .5;
  var noiseRange = random(noiseLowerBound,noiseUpperBound);
  var noiseX = 0;
  
  var vx = 1;
  var vy = 0;
  var vel = createVector(vx, vy);
  
  this.update = function() {

    noiseX = map(pos.x, 0, width, 0, noiseRange);
    pos.y = noise(noiseX) * 500;
    pos.x += vel.x
    
    radius = radUpper * sin(angle);
    
    angle+=frequency;
    
  }
  this.display = function() {
    noStroke();
    smooth();
    
    //GRADIENT//
    //c = map(radius, radLower,radUpper,255, 0);
    //fill(0, c);
    
    fill(random(200), 10, random(200));
    ellipse(pos.x, pos.y, radius, radius)
  }
  

}
