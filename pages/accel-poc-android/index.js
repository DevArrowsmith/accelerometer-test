let currentColumn = 2;

function moveBlock(event) {  
  if (event.gamma) {
    document.getElementById("gamma").textContent = `${event.gamma.toFixed(2)}`
  }
  
  if (event.beta) {
    document.getElementById("beta").textContent = `${event.beta.toFixed(2)}`
  }
  
	if (event.gamma < -16 && currentColumn > 1) {
    currentColumn = 1;
		document.getElementById("block").className = `column-${currentColumn}`;
	}
  
  if (event.gamma > -16 && event.gamma < 16) {
    currentColumn = 2;
		document.getElementById("block").className = `column-${currentColumn}`;
	}
 
  if (event.gamma > 16) {
    currentColumn = 3;
		document.getElementById("block").className = `column-${currentColumn}`;
	}
  
  document.getElementById("current-column").textContent = `${currentColumn}`
}
  
window.addEventListener("deviceorientation", moveBlock);

function getAccel(){
  alert("getAccel invoked");
    DeviceMotionEvent.requestPermission().then(response => {
        alert(`Response: ${response}`);
        if (response == 'granted') {
       // Add a listener to get smartphone orientation 
           // in the alpha-beta-gamma axes (units in degrees)
            window.addEventListener('deviceorientation',(event) => {
                // Expose each orientation angle in a more readable way
                alpha_degrees = event.alpha;
                beta_degrees = event.beta;
                gamma_degrees = event.gamma;

                document.getElementById("gamma").textContent = `${gamma_degrees.toFixed(2)}`;
                
                document.getElementById("beta").textContent = `${beta_degrees.toFixed(2)}`;
                
                if (gamma_degrees < -16) {
                  currentColumn = 1;
                  document.getElementById("block").className = `column-${currentColumn}`;
                }
                
                if (gamma_degrees > -16 && gamma_degrees < 16) {
                  currentColumn = 2;
                  document.getElementById("block").className = `column-${currentColumn}`;
                }
               
                if (gamma_degrees > 16) {
                  currentColumn = 3;
                  document.getElementById("block").className = `column-${currentColumn}`;
                }
                
                document.getElementById("current-column").textContent = `${currentColumn}`;
              });
        }
      })
    };