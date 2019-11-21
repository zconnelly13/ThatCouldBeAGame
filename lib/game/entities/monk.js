ig.module(
    'game.entities.monk'
)
.requires(
    'impact.entity',
)
.defines(function() {

    EntityMonk = ig.Entity.extend({
        size: {x:30, y:56},
        collides: ig.Entity.COLLIDES.NONE,

        gravityFactor: 0,
        speed : 4,
        health: 1000,

        maxVel: {x:5000, y:5000},

        animSheet: new ig.AnimationSheet('media/img/monk_30_56.png', 30, 56),

        update: function() {
            if (ig.input.state('left') && this.pos.x > 0) {
                this.pos.x -= this.speed;
            }
            if (ig.input.state('right') && this.pos.x < 1280 - this.size.x) {
                this.pos.x += this.speed;
            }
            if (ig.input.state('up') && this.pos.y > 0) {
                this.pos.y -= this.speed;
            }
            if (ig.input.state('down') && this.pos.y < 800 - this.size.y) {
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
        },

        takeDamage: function() {
            this.health -= ig.game.monkDamage;
            if (this.health <= 0) {
                this.kill();
            }
        }

    })
});
