///CLOCK MODES

document.addEventListener('DOMContentLoaded', function() {
    //MODE ELEMENT DECLARATION
    
    const toggleButton = document.getElementById('changeMode');
    const stopwatch = document.querySelector('.stopwatch-wrap'); 
    const clock = document.querySelector('.time-wrap');
    const startStop = document.getElementById('startStop');
    const light = document.getElementById('light');
    const lapReset = document.getElementById('lapReset');
    const time24 = document.getElementById('24hrs');
    const iconWatch = document.querySelector('.icon-watch');
    const timeFormatIcon = document.querySelector('.timeFormatIcon');
    const displayDate = document.getElementById('date');
    const displayDay = document.getElementById('day');

    
    //SET MODE TYPE
    let mode = 0;


    //DOM MANIPULATION FOR MODES -- THIS WILL BE CHANGE UPON DESIGNING
    const hideTime = () => { 
        clock.style.display = "none";
        stopwatch.style.display = "flex";

        startStop.style.display = "inline-block";
        lapReset.style.display = "inline-block";
        light.style.display = "none";  
        time24.style.display = "none";
        timeFormatIcon.style.display = "none";
        iconWatch.style.display = "block";
        displayDate.style.visibility = "hidden";
        displayDay.style.visibility = "hidden";
        
    }
    const hideStopwatch = () => {
        stopwatch.style.display = "none";
        clock.style.display = "flex";

        startStop.style.display = "none";
        lapReset.style.display = "none";
        light.style.display = "inline-block";
        time24.style.display = "inline-block";
        iconWatch.style.display = "none";
        timeFormatIcon.style.display = "block";
        displayDate.style.visibility = "visible";
        displayDay.style.visibility = "visible";
        
        
    }

    //TOGGLE MODES
    const toggleMode = () =>{
        if (mode === 0){
            mode = 1
            hideTime();
        } else {
            mode = 0;
            hideStopwatch();
            
        }
    }

    toggleButton.addEventListener('click', toggleMode);


});



const updateDate = () => {
//ELEMENT DECLARATION 
const displayDate = document.getElementById('date');
const displayDay = document.getElementById('day');


//JS TO GET YEAR, MONTH, DATE
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const date = String(currentDate.getDate()).padStart(2, '0');

//INDEXING WEEKDAYS
const week = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
const dayIndex = currentDate.getDay();



//DISPLAYING TO DOM;
displayDate.innerHTML = date;
displayDay.innerHTML = week[dayIndex];

}




//ANIMATED TIME CLOCK
const updateClock = () => { 

    //ELEMENT DECLARATION
    const displayHour = document.getElementById('time-hour');
    const displayMinute = document.getElementById('time-min');
    const displaySecond = document.getElementById('time-sec');


    //GETTING TIME
    const currentDate = new Date();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    //DISPLAY TIME IN DOM
    displayHour.textContent = hours;
    displayMinute.textContent = minutes;
    displaySecond.textContent = seconds;

}

updateDate();
setInterval(updateDate, 1000);
updateClock();
setInterval(updateClock, 1000);


//STOPWATCH FUNCTION


//DECLARATION OF ELEMENTS
const minutesDisplay = document.getElementById('stopwatch-min');
const secondsDisplay = document.getElementById('stopwatch-sec');
const millisecondsDisplay = document.getElementById('stopwatch-ms');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('lapReset');


//VARIABLES
let startTime = 0;
let elapsedTime = 0;
let intervalId;
let mins = 0;
let secs = 0;
let msecs = 0;


//STARTSTOP BUTTON FUNCTION
startStopButton.addEventListener('click', () => {
    if (intervalId) {
        // Stop the stopwatch
        clearInterval(intervalId);
        intervalId = null;
        elapsedTime = Date.now() - startTime;
    } else {
        // Start the stopwatch
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 10);
    }
});


//RESET BUTTON FUNCTION
resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = 0;
    mins = 0;
    secs = 0;
    msecs = 0;
    updateTimeDisplay();
});


//STOPWATCH UPDATE VARIABLE FUNCTION
function updateTime() {
    elapsedTime = Date.now() - startTime;

    msecs = Math.floor(elapsedTime / 1000 * 60) % 60;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);

    updateTimeDisplay();
}


//STOPWATCH UPDATE ELEMENT FUNCTION 
function updateTimeDisplay() {
    minutesDisplay.textContent = String(mins).padStart(2, '0');
    secondsDisplay.textContent = String(secs).padStart(2, '0');
    millisecondsDisplay.textContent = String(msecs).padStart(2, '0');
}
