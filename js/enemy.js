var Enemy = function( x, row, speed, direction ) {

    this.y = 58 + ( row - 1 )*83;

    this.x = x;
    this.speed = speed;
    this.direction = direction;

};

Enemy.prototype.updatePosition = function( dt ) {

    this.x += this.direction*this.speed*dt;

    // check for collision if player is to right of enemy

    if( (this.x <= player.x) && (this.x + 101 >= player.x) && (player.y == this.y) ) {

        player.getHit();

    }

    // check for collision if player is to left of enemy

    if( (player.x < this.x) && (player.x + 101 > this.x) && player.y == this.y ) {

        player.getHit();

    }

};

Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};