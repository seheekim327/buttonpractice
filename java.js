var numClicks = 0;

if (numClicks==0){
  document.getElementById("clickCount").innerHTML='0';
}
  
function count(){
  numClicks++;          
  document.getElementById("clickCount").innerHTML = numClicks;  
  }

function reset(){
  numClicks=0;
  document.getElementById("clickCount").innerHTML = numClicks; 
}