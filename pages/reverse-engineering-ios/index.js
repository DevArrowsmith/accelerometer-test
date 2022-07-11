var px = 50; // Position x and y
var py = 50;
var vx = 0.0; // Velocity x and y
var vy = 0.0;
var updateRate = 1/60; // Sensor refresh rate

mod1 = document.getElementById("test-content-modification-arbitrary");

function getAccel(){
  alert("getAccel invoked");
    DeviceMotionEvent.requestPermission().then(response => {
        alert(`Response: ${response}`);
        if (response == 'granted') {
       // Add a listener to get smartphone orientation 
           // in the alpha-beta-gamma axes (units in degrees)
            window.addEventListener('deviceorientation',(event) => {
                // Expose each orientation angle in a more readable way
                rotation_degrees = event.alpha;
                frontToBack_degrees = event.beta;
                leftToRight_degrees = event.gamma;
                
                // Update velocity according to how tilted the phone is
                // Since phones are narrower than they are long, double the increase to the x velocity
                vx = vx + leftToRight_degrees * updateRate*2; 
                vy = vy + frontToBack_degrees * updateRate;
                
                // Update position and clip it to bounds
                px = px + vx*.5;
                if (px > 98 || px < 0){ 
                    px = Math.max(0, Math.min(98, px)) // Clip px between 0-98
                    vx = 0;
                }

                py = py + vy*.5;
                if (py > 98 || py < 0){
                    py = Math.max(0, Math.min(98, py)) // Clip py between 0-98
                    vy = 0;
                }

                mod2 = document.getElementById("test-content-modification-arbitrary-two");
                mod3 = document.getElementById("test-content-modification-value");
                dot = document.getElementsByClassName("indicatorDot")[0]

                mod1.textContent = `Test content modification: Arbitrary: Success`;

                mod2.textContent = `Test content modification: Arbitrary 2: Success`;

                mod3.textContent = `Test content modification: Value: ${rotation_degrees}`;
                
                dot.setAttribute('style', "height:20px; width:20px; border-radius: 10px; background-color:goldenrod; position: absolute; left:" + (px) + "%;" + "top:" + (py) + "%;");
            });
        }
    });
}