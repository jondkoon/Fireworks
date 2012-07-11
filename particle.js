(function(){

    var defaults = {
        x: 10,
        y: 10,
        color: new Color(255,0,0,1),
        height: 4,
        width: 4,
        vx: 1,
        vy: 1,
        mass: 1
    };
    var gravity = 9.8;

    window.Particle = function(options){
        Utils.extend(this,defaults,options);
    }

    Particle.prototype = {
        draw: function(ctx){
            ctx.fillStyle = this.color.toString();
            var x = Math.round(this.x);
            var y = Math.round(this.y);
            ctx.fillRect(x,y,this.width,this.height);
        },
        step: function(milliseconds){
            if(isNaN(milliseconds)){
                milliseconds = 1000/60;
            }
            var seconds = (milliseconds / 1000);
            var dx = this.vx * seconds;
            var dy = this.vy * seconds;
            this.x += dx;
            this.y += dy;
            this.vy += gravity * this.mass * seconds;
        }
    };

    Particle.random = function(x,y,color){
        return new Particle({
            color: color,
            x: x,
            y: y,
            width: Utils.randomNumber(2,3,true),
            height: Utils.randomNumber(2,3,true),
            vy: Utils.randomNumber(-65, -5),
            vx: Utils.randomNumber(-20, 20)
        });
    }

})()
