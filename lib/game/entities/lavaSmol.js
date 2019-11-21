ig.module(
    'game.entities.lavaSmol'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityLavaSmol = ig.Entity.extend({
        size: {x:128, y:128},
        collides: ig.Entity.COLLIDES.FIXED,

        zIndex: 0,

        gravityFactor: 0,

        animSheet: new ig.AnimationSheet('media/img/lavaSmol.png', 110, 128),

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
