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

// Player.prototype.render = function () {
//     $('#player').css({
//         transform: 'translate(' +
//             this.position.x + 'px,' +
//             this.position.y + 'px)'
//     })
// }


// Player.prototype.move = function(){
//     this.position.x += this.speed.x;
//     this.position.y += this.speed.y;
//
//     var globalWindow = $(window);
//     if (this.position.x < 0 ||
//         this.position.x > globalWindow.width()) {
//         this.speed.x *= -1;
//     }
//     if (this.position.y < 0 ||
//         this.position.y > globalWindow.height()) {
//         this.speed.y *= -1;
//     }
// };
