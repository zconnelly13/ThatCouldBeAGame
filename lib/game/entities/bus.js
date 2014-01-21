ig.module(
    'game.entities.bus'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityBus = ig.Entity.extend({
        size: {x:112, y:55},
        collides: ig.Entity.COLLIDES.ACTIVE,
        zIndex: 100,

        gravityFactor: 0,

        maxVel: {x:50000, y:0},

        animSheet: new ig.AnimationSheet('media/img/bus_112_55.png', 112, 55),
        
        update: function() {
            this.parent();
        },

        draw: function() {
            this.parent();
        },

        init: function(x,y,settings) {
            this.vel.x = -100*ig.game.levelNumber;
            this.accel.x = -5*Math.pow(ig.game.levelNumber,2);
            this.parent(x,y,settings);
            this.addAnim('default',1,[0]);
        }

    })
});

