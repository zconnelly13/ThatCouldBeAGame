ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityPlayer = ig.Entity.extend({
        size: {x:37, y:61},
        collides: ig.Entity.COLLIDES.NONE,

        gravityFactor: 0,

        health: 1000,
        maxVel: {x:5000, y:5000},

        animSheet: new ig.AnimationSheet('media/img/player_37_61.png', 37, 61),

        speed: 2,
        
        update: function() {
            if (!this.waterBottle) {
                this.waterBottle = ig.game.spawnEntity(EntityWaterBottle,this.pos.x-13,this.pos.y+31);
                this.waterBottle.currentAnim.flip.x = true;
            }
            if (ig.game.time%50 < 30 || Math.random() < .1) {
                this.waterBottle.squirt();
            }
            var moveRandom = Math.random();
            if (ig.game.time%100 < 50 || moveRandom < 0.1) {
                this.pos.x -= this.speed;
                this.waterBottle.pos.x -=this.speed;
            } else if (ig.game.time%100 > 50 || moveRandom > 0.9) {
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
            console.log(other);
        },

        takeDamage: function() {
            this.health-=ig.game.playerDamage;
            if (this.health <= 0) {
                ig.game.nextLevel();
            }
        },

    })
});

