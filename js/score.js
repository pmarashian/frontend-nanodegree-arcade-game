/*
    Tracks and renders game score
 */

var Score = function() {

    this.x = 10;
    this.y = 100;

    this.score = 0;

};

Score.prototype.render = function() {

    ctx.font = "24px 'Open Sans'";
    ctx.textAlign = "left";

    ctx.fillStyle = "black";
    ctx.fillText( "Score: " + this.score, this.x, this.y );

};

Score.prototype.reset = function() {

    this.score = 0;

};

Score.prototype.add = function( score ) {

    this.score += score;

};