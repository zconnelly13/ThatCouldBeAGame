ig.module(
    'game.entities.monk'
)
.requires(
    'impact.entity',
)
.defines(function() {

    EntityMonk = ig.Entity.extend({
        size: {x:46, y:80},
        collides: ig.Entity.COLLIDES.ACTIVE,

        gravityFactor: 0,
        speed : 4,
        health: 1000,

        maxVel: {x:5000, y:5000},

        animSheet: new ig.AnimationSheet('media/img/player_2.png', 46, 80),

        speed: 135,
        zIndex: 1,

        startX: null,
        startY: null,

        update: function() {
            // check victory

            if (this.pos.x >= 1120) {
                alert("Monk Wins!");
                window.location.reload();
            }

            // check blue / red death
            if (this.pos.x >= 772 && this.pos.y >= 340) {
                this.pos.x = this.startX;
                this.pos.y = this.startY;
            }

            // set initial
            if (this.startX === null) {
                this.startX = this.pos.x;
            }
            if (this.startY === null) {
                this.startY = this.pos.y;
            }

            // movement
            if (ig.input.state('left')) {
                this.vel.x = -this.speed;
            } else if (ig.input.state('right')) {
                this.vel.x = this.speed;
            } else {
                this.vel.x = 0;
            }
            if (ig.input.state('up')) {
                this.vel.y = -this.speed;
            } else if (ig.input.state('down')) {
                this.vel.y = this.speed;
            } else {
                this.vel.y = 0;
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

    })
});
