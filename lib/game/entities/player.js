ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityPlayer = ig.Entity.extend({
        size: {x:53, y:61},
        collides: ig.Entity.COLLIDES.ACTIVE,
        zIndex: 100,
        classType: 'EntityPlayer',

        gravityFactor: 0,

        maxVel: {x:50000, y:0},
        left: false,

        animSheet: new ig.AnimationSheet('media/img/player_53_61.png', 53, 61),
        
        update: function() {
            if (ig.input.pressed('left') && this.left == false) {
                this.left = true;
                this.vel.x -= ig.game.levelNumber*5;
            } else if (ig.input.pressed('right') && this.left == true) {
                this.left = false;
                this.vel.x -= ig.game.levelNumber*5;
            }
            this.parent();
            this.handleCameraMovement();
        },

        handleCameraMovement: function() {
            if (this.getPlayer().pos.x < ig.system.height / 2) {
                ig.game.screen.x = this.getPlayer().pos.x- ig.system.height / 2;
            }
        },

        collideWith: function(other,axis) {
            ig.game.nextLevel();
        },
            
        getPlayer: function() {
            return ig.game.getEntitiesByType(EntityPlayer)[0];
        },

        draw: function() {
            this.parent();
        },

        init: function(x,y,settings) {
            this.parent(x,y,settings);
            this.addAnim('default',1,[0]);
        }

    })
});

