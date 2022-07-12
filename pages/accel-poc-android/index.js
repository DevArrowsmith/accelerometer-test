let currentColumn = 2;

function moveBlock(event) {  
  if (event.alpha) {
    document.getElementById("alpha").textContent = `${event.alpha.toFixed(2)}`
  }

  if (event.gamma) {
    document.getElementById("gamma").textContent = `${event.gamma.toFixed(2)}`
  }
  
  if (event.beta) {
    document.getElementById("beta").textContent = `${event.beta.toFixed(2)}`
  }
  
	if (event.gamma < -70) {
    currentColumn = 1;
		document.getElementById("block").className = `column-${currentColumn}`;
	}
  
  if (event.gamma > -70 && event.gamma < 70) {
    currentColumn = 2;
		document.getElementById("block").className = `column-${currentColumn}`;
	}
 
  if (event.gamma > 70) {
    currentColumn = 3;
		document.getElementById("block").className = `column-${currentColumn}`;
	}
  
  document.getElementById("current-column").textContent = `${currentColumn}`
}
  
window.addEventListener("deviceorientation", moveBlock);