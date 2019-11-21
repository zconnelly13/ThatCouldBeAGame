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
    gravity: 300,

    monkDamage: 10,
    playerDamage: 5,

	font: new ig.Font( 'media/fonts/handwriting_white_30.font.png' ),

	init: function() {
        ig.input.bind(ig.KEY.SPACE,'spacebar');
        ig.input.bind(ig.KEY.LEFT_ARROW,'left');
        ig.input.bind(ig.KEY.RIGHT_ARROW,'right');
        ig.input.bind(ig.KEY.UP_ARROW,'up');
        ig.input.bind(ig.KEY.DOWN_ARROW,'down');
        ig.input.bind(ig.KEY.LEFT_SHIFT,'left_shift');
        ig.input.bind(ig.KEY.RIGHT_SHIFT,'right_shift');
	    // ig.input.bind(ig.KEY.W,'w');
	    // ig.input.bind(ig.KEY.A,'a');
	    // ig.input.bind(ig.KEY.S,'s');
	    // ig.input.bind(ig.KEY.D,'d');
        ig.input.bind(ig.KEY.COMMA,'w');
        ig.input.bind(ig.KEY.A,'a');
        ig.input.bind(ig.KEY.O,'s');
        ig.input.bind(ig.KEY.E,'d');
        this.loadLevel(LevelDefault);
	},

	update: function() {
        this.time++;
		this.parent();
        //this.handleCameraMovement();
	},

	draw: function() {
		this.parent();
		var x = ig.system.width/2,
			y = ig.system.height/2;
        if (this.time < 50) {
            //this.font.draw('Level ' + this.levelNumber, x, y, ig.Font.ALIGN.CENTER );
        }
        if (this.levelNumber == 1) {
            //this.font.draw('Left, Right, Spacebar', x, y + 150, ig.Font.ALIGN.CENTER );
        }
	},

    getPlayer: function() {
        return ig.game.getEntitiesByType(EntityPlayer)[0];
    },

    nextLevel: function() {
        this.monkDamage += 1;
        this.time = 0;
        this.levelNumber++;
        this.loadLevel(LevelDefault);
    }
});

ig.main( '#canvas', MyGame, 60, 1280, 800, 1);

});
