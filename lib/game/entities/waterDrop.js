ig.module(
    'game.entities.waterDrop'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityWaterDrop = ig.Entity.extend({
        size: {x:3, y:3},
        collides: ig.Entity.COLLIDES.LITE,

        gravityFactor: 1,

        maxVel: {x:5000, y:5000},
        vel: {x:200,y:-200},
        
        update: function() {
            this.parent();
        },

        draw: function() {
            ig.system.context.fillStyle = 'blue';
            ig.system.context.fillRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
            this.parent();
        },

        init: function(x,y,settings) {
            this.parent(x,y,settings);
        },

        collideWith: function(other,axis) {
        },

    })
});

