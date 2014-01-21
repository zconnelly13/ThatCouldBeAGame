ig.module(
    'game.entities.waterBottle'
)
.requires(
    'impact.entity',
    'game.entities.waterDrop'
)
.defines(function() {

    EntityWaterBottle = ig.Entity.extend({
        size: {x:12, y:10},
        collides: ig.Entity.COLLIDES.LITE,

        gravityFactor: 0,

        maxVel: {x:5000, y:5000},

        animSheet: new ig.AnimationSheet('media/img/water_bottle_12_10.png', 12, 10),
        
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
        },

        squirt: function() {
            if (this.currentAnim.flip.x) {
                ig.game.spawnEntity(EntityWaterDrop,this.pos.x,this.pos.y);
            } else {
                var drop = ig.game.spawnEntity(EntityWaterDrop,this.pos.x+this.size.x,this.pos.y);
            }
        }

    })
});

