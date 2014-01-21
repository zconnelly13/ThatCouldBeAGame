ig.module(
    'game.entities.expBar'
)
.requires(
    'impact.entity'
)
.defines(function() {

    EntityExpBar = ig.Entity.extend({
        size: {x:250, y:65},
        collides: ig.Entity.COLLIDES.NONE,

        fgColor: 'white',
        bgColor: 'black',
        padding: 5,

        total: 1000,
        current: 1000,
        entityIndex : 0,

        gravityFactor: 0,

        maxVel: {x:0, y:0},

        update: function() {
            if (this.entity && this.property) {
                if (ig.game.getEntitiesByType(this.entity) && ig.game.getEntitiesByType(this.entity)[this.entityIndex]) {
                    this.current = ig.game.getEntitiesByType(this.entity)[this.entityIndex][this.property];
                } else {
                    this.kill();
                }
            }
            this.parent();
        },

        draw: function() {
            this.drawBackground();
            this.drawForeground();
            this.parent();
        },

        drawBackground: function() {
            ig.system.context.fillStyle = this.bgColor;
            ig.system.context.fillRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
        },

        drawForeground: function() {
            var startX = this.pos.x + this.padding;
            var startY = this.pos.y + this.padding;
            var percent = this.current / this.total;
            var width = (this.size.x-2*this.padding) * percent;
            var height = this.size.y - 2*this.padding;
            ig.system.context.fillStyle = this.fgColor;
            if (this.flip) {
                ig.system.context.fillRect(startX+this.size.x-this.padding*2,startY,-width,height);
            } else {
                ig.system.context.fillRect(startX,startY,width,height);
            }
        },

        init: function(x,y,settings) {
            if (settings.width) {
                this.size.x = settings.width;
            }
            if (settings.height) {
                this.size.y = settings.height;
            }
            if (settings.fgColor) {
                this.fgColor = settings.fgColor;
            }
            if (settings.bgColor) {
                this.bgColor = settings.bgColor;
            }
            if (settings.entity) {
                this.entity = settings.entity;
            }
            if (settings.property) {
                this.property = settings.property;
            }
            if (settings.padding) {
                this.padding = settings.padding;
            }
            if (settings.entityIndex) {
                this.entityIndex = settings.entityIndex;
            }
            this.flip = settings.flip;
            this.parent(x,y,settings);
        },

        collideWith: function(other,axis) {
        }

    })
});

