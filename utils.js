window.Utils = {
    randomNumber: function(min, max, round){
        var range = max - min;
        var num = (Math.random() * range) + min;
        if(round){
            num = Math.round(num);
        }
        return num;
    }
};
