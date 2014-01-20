ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

    'game.entities.player'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font: new ig.Font( 'media/fonts/handwriting_white_30.font.png' ),

	init: function() {
	},

	update: function() {
		this.parent();
	},
	
	draw: function() {
		this.parent();
		var x = ig.system.width/2,
			y = ig.system.height/2;
		this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
	}
});

ig.main( '#canvas', MyGame, 60, 640, 400, 1);

});
