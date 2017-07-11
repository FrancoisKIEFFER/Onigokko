function Board() {
    var limit = {
        x: $(window).width()-100,
        y: $(window).height()-100,
    };
    this.player = new Player(Math.random()*limit.x, Math.random()*limit.y);
    this.hunter = new Hunter(Math.random()*limit.x, Math.random()*limit.y);
    this.mountain = new Mountain(Math.random()*limit.x, Math.random()*limit.y);
    this.player.linkToKeyboard();
}

Board.prototype.init = function(){
  var limitX = $(window).width()-100;
  var limitY = $(window).height()-100;
  $('#board').css('background-color', '#ddd').css('height', limitY+'px').css('width', limitX+'px');
  $('#board').append('<div class="player"></div>');
  $('#board').append('<div class="mountain"></div>');
  $('#board').append('<div class="hunter"></div>');
};

/**
 * Render the board and all its elements
 */
Board.prototype.render = function(){
  var x = this.player.position.x;
  var y = this.player.position.y;
  $('.player').css('transform', 'translate('+x+'px,'+y+'px)');

};

Board.prototype.start = function(){
  this.init();
  var that = this;
  setInterval(function () {
    // that.player.move();
    that.render();
  }, 30)
};
