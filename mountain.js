function Mountain(x,y) {
  this.position = {
    x: x,
    y: y
  };

  this.initialSpeed = 20
  this.speed = {
    x: this.initialSpeed,
    y: this.initialSpeed
  };
}
