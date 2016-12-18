class Pack {
  constructor(pack_size) {
    this.pack_size = pack_size;
    this.members = [];
    for (var i=0; i < this.pack_size; i++) {
      this.members.push(new Fish(random(screen.width),random(screen.height)));
    }
  }

  update() {
    // console.log("in update")
    // console.log(this.std_dev());
    var avg_dist = this.std_dev()
    var average_position = this.get_average_position()
    average_position.x = average_position.x + random(-25,25)
    average_position.y = average_position.y + random(-25,25)
    // console.log(average_position)
    // console.log(avg_dist)
    // console.log(this.get_average_position());
    for (var i=0; i<this.members.length; i++) {
      // this.members[i].pos.x += random(-0.5,1.5)
      // this.members[i].pos.y += random(-10,10)
      // console.log(this.members[i].pos.x)
      this.members[i].pos = this.new_position(this.members[i].pos, avg_dist, average_position)
    }
  }

  display() {
    noStroke()
    smooth()
    fill(0,random(255),random(255))
    for (var i=0; i<this.members.length; i++) {
      ellipse(this.members[i].pos.x, this.members[i].pos.y, this.members[i].radius, this.members[i].radius/2)
    }
  }

  new_position(point, average_distance, average_position) {
      // Vector2D a_moved = a.add(b.subtract(a).norm().multiply(d));
      // var new_position =
      // console.log(point.dist(average_position))
      if (average_distance > 25) {
        console.log("avg dist is greater than 25")
        if (point.dist(average_position) < (average_distance / 2)) {
          return createVector(random(screen.width),random(screen.height))
        }
        if (point.dist(average_position) > average_distance * 1/2) {
          return point.add(average_position.sub(point).normalize().mult(average_distance/random(16,128)))
        }
        else {
          console.log("in the else")
          return point.add(average_position.sub(point).normalize().mult(random(-1,-100)))
        }
      }
      else {
        console.log("new_position returning random vector")
        return createVector(random(screen.width),random(screen.height))
      }


    // Vector2D a_moved = a.add(b.subtract(a).norm().multiply(d));
  }

  variance() {
    // Calculate the average point in the member set
    var average = this.get_average_position()
    // Get the variance from the average position
    var variance = 0
    for (var i=0; i<this.members.length; i++) {
      variance += Math.pow(int(dist(this.members[i].pos.x, this.members[i].pos.y, average.x, average.y)), 2)
    }
    return variance = variance / this.members.length
  }

  std_dev() {
    return Math.pow(this.variance(), 1/2)
  }

  get_average_position() {
    var average = createVector(0,0)
    for (var i=0; i<this.members.length; i++) {
      average.x += this.members[i].pos.x
      average.y += this.members[i].pos.y
    }
    average.x = average.x / this.members.length
    average.y = average.y / this.members.length
    return average
  }
}
