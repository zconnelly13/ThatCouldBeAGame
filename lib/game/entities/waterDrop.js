ig.module(
    'game.entities.waterDrop'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityWaterDrop = ig.Entity.extend({
        size: {x:3, y:3},
        collides: ig.Entity.COLLIDES.NEVER,

        gravityFactor: 1,

        maxVel: {x:5000, y:5000},
        vel: {x:200,y:-200},
        
        update: function() {
            this.checkDeath();
            this.parent();
        },

        checkDeath: function() {
            var player = ig.game.getPlayer();
            if (this.target == player && this.touches(ig.game.getPlayer())) {
                player.takeDamage();
                this.kill();
            } else if (this.target == 'monk') {
                var monks = ig.game.getEntitiesByType(EntityMonk);
                for (var i=0;i<monks.length;i++) {
                    var monk = monks[i];
                    if (this.touches(monk)) {
                        monk.takeDamage();
                        this.kill();
                        break;
                    }
                }
            }
        },

        draw: function() {
            if (this.vel.x < 0 ) {
                ig.system.context.fillStyle = 'DodgerBlue';
            } else {
                ig.system.context.fillStyle = 'lightblue';
            }
            ig.system.context.fillRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
            this.parent();
        },

        init: function(x,y,settings) {
            this.vel.y += Math.random()*20-10;
            this.parent(x,y,settings);
        },

        collideWith: function(other,axis) {
        },

    })
});

