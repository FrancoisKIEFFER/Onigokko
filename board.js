function Board() {
  var limit = {
    x: $(window).width()-400,
    y: $(window).height()-100,
  };
  this.initialPlayer = new Character(Math.floor(Math.random()*limit.x), Math.floor(Math.random()*limit.y));
  this.hunter = new Character(Math.floor(Math.random()*limit.x),Math.floor(Math.random()*limit.y));
  this.hunter.linkToKeyboard(74, 73, 76, 75, 8);
  this.playersArray = [];
  this.addPlayer(this.initialPlayer);

  this.recoveryMilliSeconds = 0;
}

Board.prototype.init = function(){
  var limitX = $(window).width()-400;
  var limitY = $(window).height()-100;
  $('#board').css('background-color', '#ddd').css('height', limitY+'px').css('width', limitX+'px');
  $('#board').append('<div class="hunter"><img src="img/hunter.jpg" width="50" height="50" alt=""/></div>');
};

/**
* Render the board and all its elements
*/
Board.prototype.render = function(){
  for (var i = 0; i < this.playersArray.length; i++) {
    var x = this.playersArray[i].position.x;
    var y = this.playersArray[i].position.y;
    $('.player-'+i).css('transform', 'translate('+x+'px,'+y+'px)');
  }

  var xxx = this.hunter.position.x;
  var yyy = this.hunter.position.y;
  $('.hunter').css('transform', 'translate('+xxx+'px,'+yyy+'px)');
};

Board.prototype.update = function(){
  contact()
}

// Add a player div on the board, in a random place, controled by ZQSD
Board.prototype.addPlayer = function(player){
  if (this.playersArray.length >= 10) {
    alert("Game Over");
    window.location.reload();
  }
  else {
    this.playersArray.push(player);
    var index = this.playersArray.length - 1;
    $('#board').append('<div class="players player-'+index+'"><img src="img/player.png" width="50" height="50" alt=""/></div>');
    player.linkToKeyboard();
  }
}

Board.prototype.start = function(){
  this.init();
  var that = this;

  setInterval(function () {
    that.render();
    if (that.initialPlayer.doesTouch(that.hunter) && that.recoveryMilliSeconds <= 0){
      var limit = {
        x: $(window).width()-450,
        y: $(window).height()-100,
      };
      console.log("BOOOOM")
      that.addPlayer(new Character(Math.floor(Math.random()*limit.x), Math.floor(Math.random()*limit.y)));
      that.recoveryMilliSeconds = 1000;
    }
    that.recoveryMilliSeconds -= 30;
  }, 30)

  setInterval(function () {
  }, 1000)
};
