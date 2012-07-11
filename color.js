(function(){

    window.Color = function(r,g,b,a){
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a == null ? 1:a;
    }

    Color.prototype = {
        toString: function(){
            return "rgba(" + [this.r,this.g,this.b,this.a].join(',') + ")";
        }
    };

    Color.random = function(alphaToo){
        var r = Utils.randomNumber(150,255,true);
        var g = Utils.randomNumber(150,255,true);
        var b = Utils.randomNumber(150,255,true);
        var a = alphaToo ? Utils.randomNumber(0,255,true) : 1;
        return new Color(r,g,b,a);
    }

})();
