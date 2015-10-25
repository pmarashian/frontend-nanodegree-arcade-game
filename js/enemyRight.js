/*
 Subclass of Enemy for that travels to the right
 */

var EnemyRight = function( x, y, speed ) {

    // Init Super Class
    Enemy.call( this, x, y, speed, 1 );

    this.sprite = 'images/enemy-bug-right.png';

};

// Setup prototype
EnemyRight.prototype = Object.create( Enemy.prototype );
EnemyRight.prototype.constructor = EnemyLeft;


EnemyRight.prototype.update = function( dt ) {

    // updatePosition is called from Enemy Class Prototype Chain
    this.updatePosition(dt);

    if( this.x >= ctx.canvas.width ) {
        this.x = -101;
    }

};