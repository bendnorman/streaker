function Colony() {
  var WIDTH = 100;
  var HEIGHT = 100;
  var CENTER = createVector(50,50)
  var START_RADIUS = 10;
  var NODE_RADIUS = 10;
  var num_elements = 5
  var nodes = []
  var edges = []

  // SETUP
  for (var i=0; i<num_elements; i++) {
    x = random(-1,1)
    y = random(-1,1)
    weight = random() * START_RADIUS
    nodes.push( CENTER.add(createVector(x * weight, y * weight)) )
  }

  for (var i=0; i<nodes.length; i++) {
    for (var x=0; i<nodes.length; x++) {

    }
  }

  this.update = function() {



  }

  this.display = function() {
    // console.log("in display")
    for (var i=0; i<nodes.length; i++) {
      // console.log("on node: "+nodes[i])
      noStroke();
      smooth();
      fill(255, 0, 0)
      ellipse(nodes[i].x, nodes[i].y, NODE_RADIUS)
    }
  }
}
