ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

    'game.levels.default',

    'game.entities.player',
    'game.entities.bus'
)
.defines(function(){

MyGame = ig.Game.extend({
	
    levelNumber: 1,
    time: 0,

	font: new ig.Font( 'media/fonts/handwriting_white_30.font.png' ),

	init: function() {
        this.loadLevel(LevelDefault);
        ig.input.bind(ig.KEY.LEFT_ARROW,'left');
        ig.input.bind(ig.KEY.RIGHT_ARROW,'right');
	},

	update: function() {
        this.time++;
		this.parent();
	},
	
	draw: function() {
		this.parent();
        if (this.time < 50) {
            this.font.draw('Level ' + this.levelNumber,ig.system.width/2,ig.system.height/2,ig.Font.ALIGN.CENTER);
        }
        if (this.levelNumber == 1) {
            this.font.draw('left...right...left...right...',ig.system.width/2,ig.system.height/2+125,ig.Font.ALIGN.CENTER);
        }
	},

    nextLevel: function() {
        this.time = 0;
        this.levelNumber++;
        this.loadLevel(LevelDefault);
    }
});

ig.main( '#canvas', MyGame, 60, 640, 400, 1);

});
