/**
 * @description Subclass of Enemy Class. Represents an enemy that travels to right.
 * @constructor
 * @param {integer} x - Starting x position of entity
 * @param {integer} row - Row that the entity travels along
 * @param {integer} speed - Speed that the entity travels
 */
var EnemyRight = function( x, y, speed ) {

    // Init Super Class
    Enemy.call( this, x, y, speed, 1 );

    this.sprite = 'images/enemy-bug-right.png';

};

// Setup prototype
EnemyRight.prototype = Object.create( Enemy.prototype );
EnemyRight.prototype.constructor = EnemyLeft;

/**
 * @description Updates the position of the entity and checks if entity is off the screen.
 * @param {float} dt - time delta between ticks
 */
EnemyRight.prototype.update = function( dt ) {

    // updatePosition is called from Enemy Class Prototype Chain
    this.updatePosition(dt);

    // if off the screen reset position to left side of canvas
    if( this.x >= ctx.canvas.width ) {
        this.x = -101;
    }

};