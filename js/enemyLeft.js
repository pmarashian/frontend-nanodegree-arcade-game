/**
 * @description Subclass of Enemy Class. Represents an enemy that travels to left.
 * @constructor
 * @param {integer} x - Starting x position of entity
 * @param {integer} row - Row that the entity travels along
 * @param {integer} speed - Speed that the entity travels
 */
var EnemyLeft = function( x, row, speed ) {

    // Init Super Class
    Enemy.call( this, x, row, speed, -1 );

    this.sprite = 'images/enemy-bug-left.png';

};

// Setup prototype
EnemyLeft.prototype = Object.create( Enemy.prototype );
EnemyLeft.prototype.constructor = EnemyLeft;

/**
 * @description Updates the position of the entity and checks if entity is off the screen.
 * @param {float} dt - time delta between ticks
 */
EnemyLeft.prototype.update = function( dt ) {

    // updatePosition is called from Enemy Class Prototype Chain
    this.updatePosition(dt);

    // if off the screen reset position to right side of canvas
    if( this.x < -101 ) {
        this.x = ctx.canvas.width + 101;
    }

};