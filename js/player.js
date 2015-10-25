var Player = function() {

    this.sprite = 'images/char-boy.png';

    this.resetPosition();

    this.lives = 3;

};

Player.prototype.resetPosition = function() {

    // set player position to middle of top row of grass

    this.x = 303;
    this.y = 390;

};

Player.prototype.update = function(dt) {

    // 58 is the top row of stone

    if( this.y == 58 ) {

        this.resetPosition();

        scoreMeter.add( 100 );

    }

};

Player.prototype.handleInput = function( key ) {

    var deltaX = 101;
    var deltaY = 83;

    if( key == 'left' ) {

        // check if at first column

        if(  this.x - deltaX < 0 ) { return; }

        this.x -= deltaX;
    }

    if( key == 'right' ) {

        // check will go off screen

        if(  this.x + deltaX >= ctx.canvas.width ) { return; }

        this.x += deltaX;
    }

    if( key == 'up' ) {

        this.y -= deltaY;
    }

    if( key == 'down' ) {

        // 390 is top row of grass

        if(  this.y == 390  ) { return; }

        this.y += deltaY;
    }

};

Player.prototype.render = function() {

    ctx.drawImage( Resources.get(this.sprite), this.x, this.y );

};

Player.prototype.getHit = function() {

    this.lives--;

    this.resetPosition();

    // if that was last life, reset the life meter and score
    if( !this.lives ) {

        lifeMeter.reset();
        scoreMeter.reset();
        this.lives = 3;

        return;

    }

    // remove a heart from the life Meter
    lifeMeter.remove();

};