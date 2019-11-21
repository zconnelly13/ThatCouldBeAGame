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

        speed: 4,

        update: function() {
            if (ig.input.state('a') && this.pos.x > 0) {
                this.pos.x -= this.speed;
            }
            if (ig.input.state('d') && this.pos.x < 1280 - this.size.x) {
                this.pos.x += this.speed;
            }
            if (ig.input.state('w') && this.pos.y > 0) {
                this.pos.y -= this.speed;
            }
            if (ig.input.state('s') && this.pos.y < 800 - this.size.y) {
                this.pos.y += this.speed;
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
