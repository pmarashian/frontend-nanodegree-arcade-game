/**
 * @description Core Enemy Class. Used to define EnemyLeft and EnemyRight
 * @constructor
 * @param {integer} x - Starting x position of entity
 * @param {integer} row - Row that the entity travels along
 * @param {integer} speed - Speed that the entity travels
 * @param {bool} direction - Direction that the entity travels.
 */
var Enemy = function( x, row, speed, direction ) {

    this.y = 58 + ( row - 1 )*83;

    this.x = x;
    this.speed = speed;
    this.direction = direction;

};

/**
 * @description Updates the position of the entity and checks for player collision.
 * @param {float} dt - time delta between ticks
 */
Enemy.prototype.updatePosition = function( dt ) {

    this.x += this.direction*this.speed*dt;

    // the collision checks could be combined into one if statement, but it
    // would get very long and hard to read.

    // check for collision if player is to right of enemy

    if( (this.x <= player.x) && (this.x + 101 >= player.x) && (player.y == this.y) ) {

        player.getHit();

    }

    // check for collision if player is to left of enemy

    if( (player.x < this.x) && (player.x + 101 > this.x) && player.y == this.y ) {

        player.getHit();

    }

};

/**
 * @description Renders the entity sprite
 */
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};