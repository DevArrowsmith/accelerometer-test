let currentColumn = 2;

function getMotionPermissions(){
    alert("getPermission invoked");
    DeviceMotionEvent.requestPermission().then(response => {
        alert(`Response: ${response}`);
        if (response == 'granted') {
          // window.addEventListener("deviceorientation", moveBlock);
          window.addEventListener('deviceorientation',(event) => {
            alpha = event.alpha;
            beta = event.beta;
            gamma = event.gamma;

            document.getElementById("alpha").textContent = `${alpha.toFixed(2)}`
            document.getElementById("beta").textContent = `${beta.toFixed(2)}`
            document.getElementById("gamma").textContent = `${gamma.toFixed(2)}`

            if (gamma < -70) {
              currentColumn = 1;
              document.getElementById("block").className = `column-${currentColumn}`;
            }
            
            if (gamma > -70 && gamma < 70) {
              currentColumn = 2;
              document.getElementById("block").className = `column-${currentColumn}`;
            }
            
            if (gamma > 70) {
              currentColumn = 3;
              document.getElementById("block").className = `column-${currentColumn}`;
            }

            document.getElementById("current-column").textContent = `${currentColumn}`;
          });
        }
    });
}