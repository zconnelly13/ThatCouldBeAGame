ig.module(
    'game.entities.monk'
)
.requires(
    'impact.entity',
    'game.entities.waterBottle'
)
.defines(function() {

    EntityMonk = ig.Entity.extend({
        size: {x:30, y:56},
        collides: ig.Entity.COLLIDES.PASSIVE,

        gravityFactor: 0,
        speed : 10,

        maxVel: {x:5000, y:5000},

        animSheet: new ig.AnimationSheet('media/img/monk_30_56.png', 30, 56),
        
        update: function() {
            if (!this.waterBottle) {
                this.waterBottle = ig.game.spawnEntity(EntityWaterBottle,this.pos.x+this.size.x,this.pos.y+25);
            }
            if (ig.input.state('spacebar')) {
                this.waterBottle.squirt();
            }
            if (ig.input.state('left')) {
                this.pos.x -= this.speed;
                this.waterBottle.pos.x -=this.speed;
            }
            if (ig.input.state('right')) {
                this.pos.x += this.speed;
                this.waterBottle.pos.x += this.speed;
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

