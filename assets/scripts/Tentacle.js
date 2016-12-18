function Planet() {
  // position and radius
  var r = random(500);
  var cx = 0;
  var cy = 0;
  var pos = createVector(cx, cy);
  //the main circle's attributes
  var vx = 0.07;
  var vy = 0 //random(1, 1);
  var circleV = createVector(vx, vy);
  // planet attributes,  r*r = x*x + y*y
  var planetAngle = 0.0; // 0-
  var period = 180; // 1/60 * period is the amount of seconds it takes
  var px = Math.cos(planetAngle) * r + cx;
  var py = Math.sin(planetAngle) * r + cy;
  var pPos = createVector(px, py);
  var pVel = PI/16; // in radians/update
  // var noiseLower = 1;
  // var noiseUpper = 2;
  this.updatePlanet = function() {
    pos.x += circleV.x;
    pos.y += circleV.y;
    // var vy = random(-0.2, 0.2);
    pPos.y = r * Math.sin(planetAngle) + pos.y;
    pPos.x = r * Math.cos(planetAngle) + pos.x;
    planetAngle += pVel;
    if (planetAngle > TWO_PI) {
      planetAngle = 0.0;
    }
  }
  this.getPosition = function() {
    return pPos;
  }
  this.getCirclePosition = function() {
    return pos;
  }
}
