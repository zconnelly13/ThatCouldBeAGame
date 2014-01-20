ig.module(
    'game.entities.iPad'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityIPad = ig.Entity.extend({
        size: {x:61, y:22},
        collides: ig.Entity.COLLIDES.ACTIVE,
        zIndex: 100,

        gravityFactor: 1,

        maxVel: {x:500, y:500},
        attached: false,

        animSheet: new ig.AnimationSheet('media/img/iPad_61_22.png', 61, 22),
        
        update: function() {
            this.checkDeath();
            if (this.attached) {
                this.pos.x = ig.game.getPlayer().pos.x;
            }
            this.parent();
        },

        collideWith: function(other,axis) {
            if (!this.attached) {
                if  (axis == "y") {
                    ig.game.getPlayer().attachIPad(this);
                }
            }
        },

        checkDeath: function() {
            if (this.pos.y > 400) {
                this.kill();
            }
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

