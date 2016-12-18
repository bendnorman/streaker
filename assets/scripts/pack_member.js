class PackMember {
  constructor(ix, iy) {
    this.pos = createVector(ix, iy);
    this.radius = 10
  }

  update(x,y) {
    console.log("in update")
    this.pos = createVector(x,y);
  }


}
