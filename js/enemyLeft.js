/*
    Subclass of Enemy for that travels to the left
 */

var EnemyLeft = function( x, y, speed ) {

    // Init Super Class
    Enemy.call( this, x, y, speed, -1 );

    this.sprite = 'images/enemy-bug-left.png';

};

// Setup prototype
EnemyLeft.prototype = Object.create( Enemy.prototype );
EnemyLeft.prototype.constructor = EnemyLeft;

EnemyLeft.prototype.update = function( dt ) {

    // updatePosition is called from Enemy Class Prototype Chain
    this.updatePosition(dt);

    if( this.x < -101 ) {
        this.x = ctx.canvas.width + 101;
    }



};