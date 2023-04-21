class Ball {
  //propriedades
  constructor(x, y, r) {
    //this.
    this.x = x;
    this.y = y;
    this.r = r;

    var bola_options = {
      restitution: 0.3,
    };

    this.body = Bodies.circle(this.x, this.y, this.r, bola_options);
    World.add(world, this.body);
  }

  //funções
  show() {
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.r);
  }
}
