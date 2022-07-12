let currentColumn = 2;

const block = document.getElementById("block");
const alphaReadout = document.getElementById("alpha");
const betaReadout = document.getElementById("beta");
const gammaReadout = document.getElementById("gamma");
const columnReadout = document.getElementById("current-column");

function moveBlock(event) {  
  if (event.alpha) {
    alphaReadout.textContent = `${event.alpha.toFixed(2)}`
  }

  if (event.beta) {
    betaReadout.textContent = `${event.beta.toFixed(2)}`
  }

  if (event.gamma) {
    gammaReadout.textContent = `${event.gamma.toFixed(2)}`
  }
  
	if (event.gamma < -70) {
    currentColumn = 1;
		block.className = `column-${currentColumn}`;
	}
  
  if (event.gamma > -70 && event.gamma < 70) {
    currentColumn = 2;
		block.className = `column-${currentColumn}`;
	}
 
  if (event.gamma > 70) {
    currentColumn = 3;
		block.className = `column-${currentColumn}`;
	}
  
  columnReadout.textContent = `${currentColumn}`
}
  
window.addEventListener("deviceorientation", moveBlock);