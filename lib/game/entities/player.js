ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityPlayer = ig.Entity.extend({
        size: {x:53, y:64},
        collides: ig.Entity.COLLIDES.FIXED,
        zIndex: 100,

        iPads: 0,

        gravityFactor: 0,

        maxVel: {x:0, y:0},

        animSheet: new ig.AnimationSheet('media/img/player_53_64.png', 53, 64),
        
        update: function() {
            this.pos.x = ig.input.mouse.x - (this.size.x/2);
            this.parent();
        },

        draw: function() {
            this.parent();
        },

        attachIPad: function(iPad) {
            this.iPads++;
            iPad.gravityFactor = 0;
            iPad.vel.x = 0;
            iPad.vel.y = 0;
            iPad.attached = true;
            if (this.iPads == 14) {
                ig.game.youWin();
            }
        },

        init: function(x,y,settings) {
            this.parent(x,y,settings);
            this.addAnim('default',1,[0]);
        }

    })
});

