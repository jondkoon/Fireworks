window.Utils = {
    randomNumber: function(min, max, round){
        var range = max - min;
        var num = (Math.random() * range) + min;
        if(round){
            num = Math.round(num);
        }
        return num;
    },
    extend: function(){
        var args = Array.prototype.slice.call(arguments);
        for(var i = args.length - 1; i > 0; i--){
            var a = args[i];
            var b = args[i-1];
            for(var prop in a){
                if(a.hasOwnProperty(prop)){
                    b[prop] = a[prop];
                }
            }
        }
    }
};
