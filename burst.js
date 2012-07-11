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

    Burst.random = function(x,y, particleCount){
        var burst = new Burst();
        var color = Color.random();
        for(var i = 0; i < particleCount; i++){
            burst.particles.push(Particle.random(x,y,color));
        }
        return burst;
    };
})();
