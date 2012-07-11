(function(){
    window.onload = load;
    function load(){
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var height = canvas.height;
        var width = canvas.width;
        var timeSpan = 1000/60;
        var speed = 7;
        var go = true;
        var bursts = [];

        var startBtn = document.getElementById('start_btn');
        var stopBtn = document.getElementById('stop_btn');
        var stepBtn = document.getElementById('step_btn');
        var resetBtn = document.getElementById('reset_btn');

        stepBtn.onclick = step;
        startBtn.onclick = start;
        stopBtn.onclick = stop;
        resetBtn.onclick = reset;

        reset();
        animate();
        start();

        var lastTime
        function step(timeSpan){
            clear();
            timeSpan *= speed;
            bursts.forEach(function(b){
                b.step(timeSpan);
            });
            bursts.forEach(function(b){
                b.draw(ctx);
            });
        }
        
        function start(){
            go = true;
            startBtn.disabled = true;
            stopBtn.disabled = false;
        }

        var lastTime = new Date().getTime();
        function animate(){
            var currTime = new Date().getTime();
            var timeSpan = currTime - lastTime;
            lastTime = currTime;
            if(go){
                step(timeSpan);
            }
            requestAnimationFrame(animate, canvas);
        }

        function stop(){
            go = false;
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }

        function clear(){
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.fillRect(0,0,width,height);
        }

        function reset(){
            bursts = [];
            var burstCount = 3
            for(var i = 0; i < burstCount; i++){
                bursts.push(randomBurst());
            }
        }
        
        function randomBurst(){
            var margin = 30;
            var x = Utils.randomNumber(margin, width - margin);
            var y = Utils.randomNumber(margin, height - margin);
            return Burst.random(x,y,200);
        }

    }

})()
