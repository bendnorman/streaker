class PackMember {
  constructor(ix, iy) {
    this.pos = createVector(ix, iy);
  }

  update(x,y) {
    console.log("in update")
    this.pos = createVector(x,y);
  }
}
