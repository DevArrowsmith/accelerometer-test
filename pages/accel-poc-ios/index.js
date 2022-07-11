 
let currentColumn = 2;

//getAccel test function
// const getAccel = () => {alert("Click Test")};

//getAccel function: Tested, causes permissions access.
function getAccel(){
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
          window.addEventListener("deviceorientation", moveBlock);
        }
    });
}


// Event listener: Functions (Tested)
document.getElementById("accelerometer-permissions").addEventListener("click", getAccel);


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
  
// window.addEventListener("deviceorientation", moveBlock);