ig.module(
    'game.entities.blue'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityBlue = ig.Entity.extend({
        size: {x:302, y:374},
        collides: ig.Entity.COLLIDES.PASSIVE,

        gravityFactor: 0,

        zIndex: 0,

        animSheet: new ig.AnimationSheet('media/img/blue.png', 302, 374),

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
            console.log(other);
            other.pos.x = other.startX
            other.pos.y = other.startY
        },

    })
});
