let secondsHTML = document.getElementById("seconds");
let millisecondsHTML = document.getElementById("milliseconds");
let minutesHTML = document.getElementById("minutes");
let hoursHTML = document.getElementById("hours")


let startBTN = document.getElementById("btn-start");
let stopBTN = document.getElementById("btn-stop");
let resetBTN = document.getElementById("btn-reset");


let seconds = 0
let milliseconds = 0
let minutes = 0
let hours = 0
let interval;

startBTN.addEventListener("click", () => {
     clearInterval(interval);
     interval = setInterval(startTimer, 10);
});






function startTimer() {
     milliseconds++
     if (milliseconds < 10) {
          millisecondsHTML.textContent = "0" + milliseconds
     }
     else if (milliseconds < 100) {
          millisecondsHTML.textContent = milliseconds
     }
     else if (milliseconds > 99) {
          seconds++
          milliseconds = 0
          millisecondsHTML.textContent = "00"

          if (seconds < 10) {
               secondsHTML.textContent = "0" + seconds
          } else if (seconds >= 10 && seconds < 60) {
               secondsHTML.textContent = seconds
          } else if (seconds > 59) {
               minutes++
               milliseconds = 0
               seconds = 0
               millisecondsHTML.textContent = "00"
               secondsHTML.textContent = "00"

               if (minutes < 10) {
                    minutesHTML.textContent = "0" + minutes
               } else if (minutes >= 10 && minutes < 60) {
                    minutesHTML.textContent = minutes
               } else if (minutes > 59) {
                    hours++
                    milliseconds = 0
                    seconds = 0
                    minutes = 0
                    millisecondsHTML.textContent = "00"
                    secondsHTML.textContent = "00"
                    minutesHTML.textContent = "00"
                    if (hours < 10) {
                         hoursHTML.textContent = "0" + hours
                    } else if (hours >= 10 && hours < 24) {
                         hoursHTML.textContent = hours
                    }
               }
          }



     }

}

stopBTN.addEventListener("click", () => {
     clearInterval(interval);
});





resetBTN.addEventListener("click", () => {
     milliseconds = 0
     seconds = 0
     minutes = 0


     millisecondsHTML.textContent = "00"
     secondsHTML.textContent = "00"
     minutesHTML.textContent = "00"




})