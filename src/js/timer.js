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
updateClock();
setInterval(updateDate, 1000);
setInterval(updateClock, 1000);














