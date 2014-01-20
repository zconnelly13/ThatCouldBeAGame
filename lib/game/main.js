ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

    'game.levels.default',

    'game.entities.player',
    'game.entities.iPad'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font: new ig.Font( 'media/fonts/handwriting_white_30.font.png' ),
    time: 0,
    gravity: 350,

	init: function() {
        this.loadLevel(LevelDefault);
        ig.input.initMouse();
	},

	update: function() {
        this.time++;
        if (this.time % 50 == 1) {
            this.spawnIPad();
        }
		this.parent();
	},

    spawnIPad: function() {
        ig.game.spawnEntity(EntityIPad,Math.random()*400,-50);
    },
	
    getPlayer: function() {
        return ig.game.getEntitiesByType(EntityPlayer)[0];
    },

    winner: false,
	draw: function() {
		this.parent();
        if (this.winner) {
            this.font.draw('You Win!',ig.system.width/2,ig.system.height/2,ig.Font.ALIGN.CENTER);
        }
	},

    youWin: function() {
        this.winner = true;
        setTimeout(function() {
            ig.system.stopRunLoop.call(ig.system);
        },1000);
    }
});

ig.main( '#canvas', MyGame, 60, 640, 400, 1);

});
