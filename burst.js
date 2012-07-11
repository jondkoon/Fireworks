(function(){

    window.Burst = function(){
        this.particles = [];
    }

    Burst.prototype = {
        step: function(timeSpan){
            this.particles.forEach(function(p){
                p.step(timeSpan);
            });
        },
        draw: function(ctx){
            this.particles.forEach(function(p){
                p.draw(ctx);
            });
        },
    };

    var red = "rgb(255,0,0)";
    var green = "rgb(0,255,0)";
    var blue = "rgb(0,0,255)";
    var colors = [red,green,blue];

    Burst.random = function(x,y, particleCount){
        var burst = new Burst();
        var color = colors[Utils.randomNumber(0,2,true)];
        for(var i = 0; i < particleCount; i++){
            burst.particles.push(Particle.random(x,y,color));
        }
        return burst;
    };
})();
