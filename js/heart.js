/**
 * @description Represents the life meter
 * @constructor
 */
var LifeMeter = function() {

    this.reset();

};

/**
 * @description Renders each of the life meter hearts
 */
LifeMeter.prototype.render = function() {

    this.life.forEach(function(heart){
        heart.render();
    });

};

/**
 * @description Removes a heart from the life meter
 */
LifeMeter.prototype.remove = function() {

    this.life.pop();

};

/**
 * @description Resets the life meter to 3 hearts
 */
LifeMeter.prototype.reset = function() {

    this.life = [
        new Heart(1),
        new Heart(2),
        new Heart(3)
    ];

};

/**
 * @description Represents a heart used in the life meter
 * @constructor
 * @param {integer} place - Indicates which heart in the meter.
 */
var Heart = function( place ) {

    this.sprite = 'images/Heart.png';

    // space hearts equally apart based on a "row" value
    this.x = 650 - (place-1)*40;
    this.y = 58;

};

/**
 * @description Renders a heart
 */
Heart.prototype.render = function() {

    ctx.drawImage( Resources.get(this.sprite), this.x, this.y, 33, 57 );

};