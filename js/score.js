/**
 * @description Score Meter Class.
 * @constructor
 */
var Score = function() {

    this.x = 10;
    this.y = 100;

    this.score = 0;

};

/**
 * @description Render the score.
 */
Score.prototype.render = function() {

    ctx.font = '24px "Open Sans"';
    ctx.textAlign = 'left';

    ctx.fillStyle = 'black';
    ctx.fillText( 'Score: ' + this.score, this.x, this.y );

};

/**
 * @description Reset the score to zero.
 */
Score.prototype.reset = function() {

    this.score = 0;

};

/**
 * @description Increase the score.
 */
Score.prototype.add = function( score ) {

    this.score += score;

};