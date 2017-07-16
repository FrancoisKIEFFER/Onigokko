function Board() {
    var limit = {
        x: $(window).width()-400,
        y: $(window).height()-100,
    };
    this.player = new Character(Math.floor(Math.random()*limit.x), Math.floor(Math.random()*limit.y));
    this.hunter = new Character(Math.floor(Math.random()*limit.x),Math.floor(Math.random()*limit.y));
    this.mountain = new Character(Math.floor(Math.random()*limit.x), Math.floor(Math.random()*limit.y));
    this.player.linkToKeyboard();
    this.hunter.linkToKeyboard(75, 79, 77, 76);
}

Board.prototype.init = function(){
  var limitX = $(window).width()-400;
  var limitY = $(window).height()-100;
  $('#board').css('background-color', '#ddd').css('height', limitY+'px').css('width', limitX+'px');
  $('#board').append('<div class="player"><img src="img/player.png" width="50" height="50" alt=""/></div>');
  // $('#board').append('<div class="mountain"></div>');
  $('#board').append('<div class="hunter"><img src="img/hunter.jpg" width="50" height="50" alt=""/></div>');
};

/**
 * Render the board and all its elements
 */
Board.prototype.render = function(){
  var x = this.player.position.x;
  var y = this.player.position.y;
  $('.player').css('transform', 'translate('+x+'px,'+y+'px)');
  // var xx = this.mountain.position.x;
  // var yy = this.mountain.position.y;
  // $('.mountain').css('transform', 'translate('+xx+'px,'+yy+'px)');
  var xxx = this.hunter.position.x;
  var yyy = this.hunter.position.y;
  $('.hunter').css('transform', 'translate('+xxx+'px,'+yyy+'px)');
};

Board.prototype.update = function(){
  contact()
}

Board.prototype.start = function(){
  this.init();
  var that = this;
  setInterval(function () {
    // that.player.move();
    // that.update()
    that.render();
    if (that.player.doesTouch(that.hunter) && !that.player.doesTouch(that.mountain)) {
      var limit = {
          x: $(window).width()-450,
          y: $(window).height()-100,
        };
      console.log("Boom")
      // that.player = new Character(Math.floor(Math.random()*limit.x), Math.floor(Math.random()*limit.y));
    }
  }, 30)
};
