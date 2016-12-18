class Pack {
  constructor(pack_size) {
    this.pack_size = pack_size;
    this.members = [];
    for (var i=0; i < this.pack_size; i++) {
      this.members.push(new Fish(i*i,i*i));
    }
  }

  update() {
    console.log("in update")
    console.log(this.std_dev());
    avg_dist = this.std_dev()
    average_position = this.get_average_position()

    // console.log(this.get_average_position());
    for (var i=0; i<this.members.length; i++) {
      // this.members[i].pos.x += random(-0.5,1.5)
      // this.members[i].pos.y += random(-10,10)
      // console.log(this.members[i].pos.x)
      this.members[i].pos = this.members[i].new_position(avg_dist, average_position)
    }
  }

  display() {
    noStroke()
    smooth()
    fill(255,255,255)
    for (var i=0; i<this.members.length; i++) {
      ellipse(this.members[i].pos.x, this.members[i].pos.y, this.members[i].radius, this.members[i].radius/2)
    }
  }

  new_position(point, average_position) {

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
