ig.module(
    'game.entities.player'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityPlayer = ig.Entity.extend({
        size: {x:46, y:80},
        collides: ig.Entity.COLLIDES.ACTIVE,

        gravityFactor: 0,

        zIndex: 1,

        health: 1000,
        maxVel: {x:5000, y:5000},

        animSheet: new ig.AnimationSheet('media/img/player_1.png', 46, 80),

        speed: 135,

        startX: null,
        startY: null,

        update: function() {
            if (this.pos.x >= 1120) {
                alert("Shifty Wins!");
                window.location.reload();
            }

            if (this.pos.x >= 772 && this.pos.y <= 332) {
                this.pos.x = this.startX;
                this.pos.y = this.startY;
            }

            if (this.startX === null) {
                this.startX = this.pos.x;
            }
            if (this.startY === null) {
                this.startY = this.pos.y;
            }
            if (ig.input.state('a')) {
                this.vel.x = -this.speed;
            } else if (ig.input.state('d')) {
                this.vel.x = this.speed;
            } else {
                this.vel.x = 0;
            }
            if (ig.input.state('w')) {
                this.vel.y = -this.speed;
            } else if (ig.input.state('s')) {
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
