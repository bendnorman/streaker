class PackMember {
  constructor(ix, iy) {
    this.pos = createVector(ix, iy);
    this.radius = 2
    this.dir = createVector(0,0)
    // this.color =
  }

  update(x,y) {
    console.log("in update")
    this.pos = createVector(x,y);
  }


}
