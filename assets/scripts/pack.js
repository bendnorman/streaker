class Pack {
  constructor(pack_size) {
    this.pack_size = pack_size;
    this.pack_members = [];
    for (var i=0; i < this.pack_size; i++) {
      this.pack_members.push(new Fish(1,1));
    }
    console.log(this.pack_members);
    var a = new Fish(1,1);
    console.log(a.pos);
    a.update(2,2);
    // console.log(this.pack_members)
  }

  update() {
    return
  }

  display() {
    return
  }

}
