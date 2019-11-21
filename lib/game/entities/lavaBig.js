ig.module(
    'game.entities.lavaBig'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityLavaBig = ig.Entity.extend({
        size: {x:278, y:87},
        collides: ig.Entity.COLLIDES.FIXED,

        gravityFactor: 0,

        zIndex: 0,

        animSheet: new ig.AnimationSheet('media/img/lavaBig.png', 288, 161),

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
            other.pos.x = other.startX
            other.pos.y = other.startY
        },

    })
});
