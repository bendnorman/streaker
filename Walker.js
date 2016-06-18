function Walker() {
  var x = 30;
  var y = 0;
  var pos = createVector(x, y);
  var radUpperBound = 20;
  var radLowerBound = 5;
  var r = null
  var g = null
  var b = null
  var changingColors = false
  var planet = new Planet();
  var opacity = random(0.5);

  if (!changingColors) {
    // Choose the rbg values if you want each walker to take on
    r = random(30, 100)
    g = random(70)
    b = random(150,255)
  }


  var radUpper = random(radUpperBound);
  var radLower = random(radLowerBound);
  var angle = random(0,TWO_PI);
  var frequency = random(0.01,0.02);

  var radius = random(radLower, radUpper);

  var noiseUpperBound = 1;
  var noiseLowerBound = 1;
  var noiseRange = random(noiseLowerBound,noiseUpperBound);
  var noiseX = 0;

  var vx = 1;
  var vy = 0;
  var vel = createVector(vx, vy);

  this.update = function() {

    noiseX = map(pos.x, 0, width, 0, noiseRange);
    var planetPosition = planet.getPosition();
    pos.y = planetPosition.y + noise(noiseX) * 500;
    pos.x = planetPosition.x;
    planet.updatePlanet();

    radius = radUpper * sin(angle);

    angle+=frequency;

  }
  this.display = function() {
    noStroke();
    smooth();

    //GRADIENT//
    //c = map(radius, radLower,radUpper,255, 0);
    //fill(0, c);
    if (changingColors) {
      fill(random(255), 255, random(255));
    } else {
      // fill(100%,0%,100%,0.5)
      // fill(r, g, b);
      c = color('rgba(0, 0, 0, '+opacity+')');
      fill(c); // Use updated 'c' as fill color
    }
    ellipse(pos.x, pos.y, radius, radius)
  }
  this.getXPosition = function() {
    return pos.x;
  }
}
