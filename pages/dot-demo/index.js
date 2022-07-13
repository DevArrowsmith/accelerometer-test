let px = 50;
let py = 50;
let vx = 0.0;
let vy = 0.0;
let updateRate = 1/60;

function moveDot(event) {
    rotation_degrees = event.alpha;
    frontToBack_degrees = event.beta;
    leftToRight_degrees = event.gamma;

    vx = vx + leftToRight_degrees * updateRate*2; 
    vy = vy + frontToBack_degrees * updateRate;
    
    px = px + vx*.5;
    if (px > 98 || px < 0){ 
        px = Math.max(0, Math.min(98, px))
        vx = 0;
    }

    py = py + vy*.5;
    if (py > 98 || py < 0){
        py = Math.max(0, Math.min(98, py))
        vy = 0;
    }
    
    dot = document.getElementsByClassName("indicator-dot")[0]
    dot.style.left = `${px}%`;
    dot.style.top = `${py}%`;
}

window.addEventListener('deviceorientation', moveDot);

function getAccel(){
  alert("getAccel invoked");
    DeviceMotionEvent.requestPermission().then(response => {
        alert(`Response: ${response}`);
        if (response == 'granted') {
            window.addEventListener('deviceorientation',(event) => moveDot(event))
        }
    });
}