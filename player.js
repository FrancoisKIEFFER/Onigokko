function Player(x,y) {
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
//
// Ball.prototype.move = function(){
//     this.position.x += this.speed.x;
//     this.position.y += this.speed.y;
//

// };

Player.prototype.linkToKeyboard = function() {
  var that = this;
  //        Moving Player
  var leftDown, rightDown, upDown, downDown,leftKey,upKey,rightKey,downKey;
  var box = $(".player"),
  left = 81,
  up = 90,
  right = 68,
  down = 83;

  console.log(box);

  var ctrlDown = false;
  var ctrlKey = 17,
  vKey = 86,
  cKey = 67;

  function keye(e) {
    var $key = e.keyCode;

    $(document).keydown(function(e) {
      if (e.keyCode == left && $key != left) leftDown = true;
      if (e.keyCode == right && $key != right) rightDown = true;
      if (e.keyCode == down && $key != down) downDown = true;
      if (e.keyCode == up && $key != up) upDown = true;
    }).keyup(function(e) {
      if (e.keyCode == left) leftDown = false;
      if (e.keyCode == right) rightDown = false;
      if (e.keyCode == down) downDown = false;
      if (e.keyCode == up) upDown = false;
    });
    if (e.keyCode == left) {
      leftKey = true;
    }

    if (e.keyCode == up) {
      upKey = true;
    }
    if (e.keyCode == right) {
      rightKey = true;
    }
    if (e.keyCode == down) {
      downKey = true;
    }

  }

  $("body").keydown(function(){
    keye(event);
  });


  $("body").keyup(function(e){
    if (e.keyCode == left) {
      leftKey = false;
    }

    if (e.keyCode == up) {
      upKey = false;
    }
    if (e.keyCode == right) {
      rightKey = false;
    }
    if (e.keyCode == down) {
      downKey = false;
    }
  });

  setInterval(function() {
    if (upKey) {
      that.position.y -= 5;
    }
    if (rightKey) {
      that.position.x += 5;
    }
    if (downKey) {
      that.position.y += 5;
    }
    if (leftKey) {
      that.position.x -= 5;;
    }

    that.render();
  },20);

}

Player.prototype.render = function() {
  $('.player').css('transform', 'translate('+this.position.x+'px,'+this.position.y+'px)');
}
