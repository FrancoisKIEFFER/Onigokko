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

Character.prototype.linkToKeyboard = function(left = 83, up = 69, right = 70, down = 68, speed = 5) {
  var that = this;
  //        Moving Character
  var leftDown, rightDown, upDown, downDown,leftKey,upKey,rightKey,downKey;

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
      that.position.y -= speed;
    }
    if (rightKey) {
      that.position.x += speed;
    }
    if (downKey) {
      that.position.y += speed;
    }
    if (leftKey) {
      that.position.x -= speed;;
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
  $('.players').css('transform', 'translate('+this.position.x+'px,'+this.position.y+'px)');
}

// Returns true when the Character touches the otherCharacter (when they are close)
Character.prototype.doesTouch = function(otherCharacter) {
  if( Math.abs(this.position.x-otherCharacter.position.x) < 50 && Math.abs(this.position.y - otherCharacter.position.y) < 50){
    return true;
  }
  return false;
}
