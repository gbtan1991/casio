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
        

        
        
    }
    const hideStopwatch = () => {
        stopwatch.style.display = "none";
        clock.style.display = "flex";
        startStop.style.display = "none";
        lapReset.style.display = "none";
        light.style.display = "inline-block";
        time24.style.display = "inline-block";
        
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
    const hours = String(currentDate.getHours()).padEnd(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    //DISPLAY TIME IN DOM
    displayHour.innerHTML = hours;
    displayMinute.innerHTML = minutes;
    displaySecond.innerHTML = seconds;

}

updateDate();
setInterval(updateDate, 1000);
updateClock();
setInterval(updateClock, 1000);


document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById(`stopwatch-hour`)
})

