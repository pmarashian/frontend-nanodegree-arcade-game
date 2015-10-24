// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = 0;
    this.y = 58;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += 100*dt;

    if( this.x >= ctx.canvas.width ) {
        this.x = -101;
    }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {

    this.sprite = 'images/char-boy.png';

    this.x = 202;
    this.y = 384;

};

Player.prototype.update = function(dt) {



};

Player.prototype.handleInput = function( key ) {

    var deltaX = 101;
    var deltaY = 83;

    if( key == 'left' ) {

        if(  this.x - deltaX < 0 ) { return; }

        this.x -= deltaX;
    }

    if( key == 'right' ) {

        if(  this.x + deltaX >= ctx.canvas.width ) { return; }

        this.x += deltaX;
    }

    if( key == 'up' ) {

        if(  this.y == 52  ) { return; }

        this.y -= deltaY;
    }

    if( key == 'down' ) {

        if(  this.y == 384  ) { return; }

        this.y += deltaY;
    }

};

Player.prototype.render = function() {

    ctx.drawImage( Resources.get(this.sprite), this.x, this.y );

};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [ new Enemy() ];

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
