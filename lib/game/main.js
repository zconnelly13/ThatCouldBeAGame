ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

    'game.levels.default',

    'game.entities.player'
)
.defines(function(){

MyGame = ig.Game.extend({

    levelNumber: 1,
    time: 0,
	
	font: new ig.Font( 'media/fonts/handwriting_white_30.font.png' ),

	init: function() {
        this.loadLevel(LevelDefault);
	},

	update: function() {
        this.time++;
		this.parent();
	},
	
	draw: function() {
		this.parent();
		var x = ig.system.width/2,
			y = ig.system.height/2;
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	},

    getPlayer: function() {
        return ig.game.getEntitiesByType(EntityPlayer)[0];
    }
});

ig.main( '#canvas', MyGame, 60, 640, 400, 1);

});
