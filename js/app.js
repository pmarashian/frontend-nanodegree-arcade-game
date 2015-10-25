var allEnemies,
    lifeMeter,
    player,
    scoreMeter;

allEnemies = [
    new EnemyLeft( 0, 1, 400 ),
    new EnemyRight( 202, 2, 150),
    new EnemyRight( 600, 2, 150),
    new EnemyLeft( -101, 3, 250),
    new EnemyLeft( 303, 3, 250),
    new EnemyRight( 0, 4, 75),
    new EnemyRight( 303, 4, 75)
];

lifeMeter = new LifeMeter();

player = new Player();

scoreMeter = new Score();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
