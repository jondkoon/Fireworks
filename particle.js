(function(){
    window.Particle = function(options){
        $.extend(this,options);
    }

    Particle.prototype = {
        x: 10,
        y: 10,
        color: "rgb(0,255,0)",
        height: 4,
        width: 4,
        vx: 1,
        vy: 1,
        mass: 1,
        gravity: 9.8,
        draw: function(ctx){
            ctx.fillStyle = this.color;
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
            this.vy += this.gravity * this.mass * seconds;
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
