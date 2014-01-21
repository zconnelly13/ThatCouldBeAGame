ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityPlayer = ig.Entity.extend({
        size: {x:64, y:64},
        collides: ig.Entity.COLLIDES.ACTIVE,

        gravityFactor: 1,

        maxVel: {x:5000, y:5000},

        animSheet: new ig.AnimationSheet('media/img/player_53_64.png', 58, 64),
        
        update: function() {
            this.parent();
        },

        draw: function() {
            this.parent();
        },

        init: function(x,y,settings) {
            this.parent(x,y,settings);
            this.addAnim('default',1,[0]);
        },

        collideWith: function(other,axis) {
        }

    })
});

