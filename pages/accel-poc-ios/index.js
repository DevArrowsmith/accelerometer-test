let currentColumn = 2;

const block = document.getElementById("block");
const alphaReadout = document.getElementById("alpha");
const betaReadout = document.getElementById("beta");
const gammaReadout = document.getElementById("gamma");
const columnReadout = document.getElementById("current-column")

function getMotionPermissions(){
    alert("getPermission invoked");
    DeviceMotionEvent.requestPermission().then(response => {
        alert(`Response: ${response}`);
        if (response == 'granted') {
          window.addEventListener('deviceorientation',(event) => {
            alpha = event.alpha;
            beta = event.beta;
            gamma = event.gamma;

            alphaReadout.textContent = `${alpha}`;
            betaReadout.textContent = `${beta}`;
            gammaReadout.textContent = `${gamma}`;

            // if (gamma < -70) {
            //   currentColumn = 1;
            //   block.className = `column-${currentColumn}`;
            // }
            
            // if (gamma > -70 && gamma < 70) {
            //   currentColumn = 2;
            //   block.className = `column-${currentColumn}`;
            // }
            
            // if (gamma > 70) {
            //   currentColumn = 3;
            //   block.className = `column-${currentColumn}`;
            // }

            // columnReadout.textContent = `${currentColumn}`;
          });
        }
    });
}