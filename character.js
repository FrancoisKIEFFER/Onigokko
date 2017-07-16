function Character(x,y) {
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

Character.prototype.linkToKeyboard = function(left = 81, up = 90, right = 68, down = 83) {
  var that = this;
  //        Moving Character
  var leftDown, rightDown, upDown, downDown,leftKey,upKey,rightKey,downKey;
  var box = $(".player");

  // console.log(box);

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

    if (that.position.x < 0) {
      that.position.x = $(window).width()-450;
    }
    if (that.position.y < 0) {
      that.position.y = $(window).height()-150;
    }
    if (that.position.x > $(window).width()-450){
      that.position.x = 0;
    }
    if (that.position.y > $(window).height()-150){
      that.position.y = 0;
    }

    // that.render();
  },20);

}


Character.prototype.render = function() {
  $('.player').css('transform', 'translate('+this.position.x+'px,'+this.position.y+'px)');
}

// Returns true when the Character touches the otherCharacter (when they are close)
Character.prototype.doesTouch = function(otherCharacter) {
  if( Math.abs(this.position.x-otherCharacter.position.x) < 50 && Math.abs(this.position.y - otherCharacter.position.y) < 50){
    return true;
  }
  return false;
}
//
// Character.prototype.printPosition = function() {
//   console.log(this.position.x, this.position.y);
// }

// Character.setPosition(x, y, board) {
//   // TODO: put a control on x y (it should be > 0, ...)
//   if (x < 0) {
//     x = 0;
//   }
//   this.position.x = x;
//   this.position.y = y;
//
// }
