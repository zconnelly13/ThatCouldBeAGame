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
        zIndex: 100,
        classType: 'EntityPlayer',

        gravityFactor: 1,

        maxVel: {x:200, y:200},

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
        }

    })
});

