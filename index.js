var board = new Board();

board.start();

console.log("Hello world!");

$(document).keydown(function(e) {
  console.log(e.which);
  $(document).keydown(function(e){
    var distToMove = 2;
    switch (e.which){
    case 81 || 113:    //left arrow key
      board.player.position.x -= distToMove;
      break;
    case 90 || 122:    //up arrow key
      board.player.position.y -= distToMove;
      break;
    case 68 || 100:    //right arrow key
      board.player.position.x += distToMove;
      break;
    case 83 || 115:    //bottom arrow key
      board.player.position.y += distToMove;
      break;
    }
});
})
