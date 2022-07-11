let currentColumn = 2;

function getMotionPermissions(){
    alert("getPermission invoked");
    DeviceMotionEvent.requestPermission().then(response => {
        alert(`Response: ${response}`);
        if (response == 'granted') {
          // window.addEventListener("deviceorientation", moveBlock);
          window.addEventListener('deviceorientation',(event) => {
            let alpha = event.alpha;
            let beta = event.beta;
            let gamma = event.gamma;

            document.getElementById("alpha").textContent = `${alpha.toFixed(2)}`
            document.getElementById("beta").textContent = `${beta.toFixed(2)}`
            document.getElementById("gamma").textContent = `${gamma.toFixed(2)}`

            if (alpha > 60 && alpha < 180) {
              currentColumn = 1;
              document.getElementById("block").className = `column-${currentColumn}`;
            }
            
            if (alpha >180 && alpha < 300) {
              currentColumn = 3;
              document.getElementById("block").className = `column-${currentColumn}`;
            }
            
            if (alpha <60 || alpha > 300) {
              currentColumn = 2;
              document.getElementById("block").className = `column-${currentColumn}`;
            }

            document.getElementById("current-column").textContent = `${currentColumn}`;
          });
        }
    });
}