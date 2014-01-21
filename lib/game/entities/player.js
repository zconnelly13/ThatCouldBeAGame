ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityPlayer = ig.Entity.extend({
        size: {x:37, y:61},
        collides: ig.Entity.COLLIDES.PASSIVE,

        gravityFactor: 0,

        maxVel: {x:5000, y:5000},

        animSheet: new ig.AnimationSheet('media/img/player_37_61.png', 37, 61),
        
        update: function() {
            if (!this.waterBottle) {
                this.waterBottle = ig.game.spawnEntity(EntityWaterBottle,this.pos.x-10,this.pos.y+32);
                this.waterBottle.currentAnim.flip.x = true;
            }
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

