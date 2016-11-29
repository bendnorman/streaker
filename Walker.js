function Walker() {
  var x = 30;
  var y = 100;
  var pos = createVector(x, y);
  var radUpperBound = 40;
  var radLowerBound = 4;
  var r = null
  var g = null
  var b = null
  var changingColors = true;
  var planet = new Planet();

  var opacity;

  if (!changingColors) {
    // Choose the rbg values if you want each walker to take on
    r = random(80, 120)
    g = random(175, 195)
    b = random(220,255)
// rgb(102, 188, 244)

  }


  var radUpper = random(radUpperBound);
  var radLower = random(radLowerBound);
  var angle = random(0,TWO_PI);
  var frequency = random(TWO_PI/64);

  var radius = random(radLower, radUpper);
  if (radius < 10) {
    opacity = random(0.5);
  } else {
    opacity = random(0.2);
  }

  var noiseUpperBound = 20;
  var noiseLowerBound = 10;
  var noiseRange = random(noiseLowerBound,noiseUpperBound);
  var noiseX = 0;

  var vx = 3;
  var vy = 0;
  var vel = createVector(vx, vy);

  this.update = function() {
    // noiseX = map(pos.x, 0, width, 0, noiseRange);
    // var planetPosition = planet.getPosition();
    // pos.y = planetPosition.y + noise(noiseX) * sin(angle) * radius; // + sin(angle) * radius;
    // pos.x = planetPosition.x + noise(noiseX); // + sin(angle) * radius;
    // planet.updatePlanet();
    // vy = random(-10,10);
    pos.y = vy + pos.y + sin(angle) * 10 + random(-10,10);
    pos.x = vx + pos.x + random(-15,15);
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
      fill(random(255), 255, random(125));
    } else {
      // fill(100%,0%,100%,0.5)
      // fill(r, g, b);
      //rgb(255, 110, 91)
      // c = color('rgba(120, 191, 168, '+opacity+')');
      c = color('rgba(255, 110, 91, '+opacity+')');
      fill(c); // Use updated 'c' as fill color
    }
    ellipse(pos.x, pos.y, radius, radius)
  }
  this.getXPosition = function() {
    return pos.x;
  }
}
