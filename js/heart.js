/*
    Renders the life meter
 */

var LifeMeter = function() {

    this.reset();

};

LifeMeter.prototype.render = function() {

    this.life.forEach(function(heart){
        heart.render();
    });

};

LifeMeter.prototype.remove = function() {

    this.life.pop();

};

LifeMeter.prototype.reset = function() {

    this.life = [
        new Heart(1),
        new Heart(2),
        new Heart(3)
    ];

};

var Heart = function( row ) {

    this.sprite = "images/Heart.png";

    // space hearts equally apart based on a "row" value
    this.x = 650 - (row-1)*40;
    this.y = 58;

};

Heart.prototype.render = function() {

    ctx.drawImage( Resources.get(this.sprite), this.x, this.y, 33, 57 );

};