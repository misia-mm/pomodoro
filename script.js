let clicked = 0;
function changeCoolor() {

	if (clicked==0){ 
	  document.getElementById('helloworldtitle').style.color = "red"; 
	  clicked = 1;
	  
	}
	  
	else {document.getElementById('helloworldtitle').style.color = "green";
	    clicked=0;
	  
	}
	
}



let minutes_work = 1
let minutes_break = 25


let cycles = 8
let minutes = minutes_work
let seconds = 0
let working = 1

let width_const = 0;
function changeTimerSlider() {
  if (working==1){width_const = 364*(minutes_work*60-minutes*60-seconds)/(minutes_work*60);}
  else {width_const=364;}
  document.getElementById('maskRect').setAttribute("width",width_const);
}


function showTimeLeft() {
 if (seconds<10){
   if (minutes<10) {document.getElementById("TimerClock").innerHTML = "0"+ minutes + ":0" + seconds ;}
   else {document.getElementById("TimerClock").innerHTML = minutes + ":0" + seconds ;}
                }
  if (seconds>=10){
    if (minutes<10){document.getElementById("TimerClock").innerHTML = "0"+minutes+":" + seconds ;}
    else{document.getElementById("TimerClock").innerHTML = minutes + ":" + seconds ;}
                  } 
}

function TrackTime() {
  if (cycles>0){
  
  showTimeLeft();
  changeTimerSlider();
  seconds = seconds-1;
  if (seconds<0){ minutes = minutes - 1; seconds = 59 ;}
  if (minutes < 0){ 
    if (working==1) { working = 0; minutes = minutes_break; seconds=0; var audio = new Audio('Skyrim_Level-Up-Sound.mp3');audio.play();}
    else { working = 1; minutes = minutes_work; seconds=seconds_work; cycles=cycles-1;}
                  }
                  
                 }
}

TrackTime();
setInterval(function () {
	TrackTime();
}, 1000);



