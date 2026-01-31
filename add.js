var h = document.getElementById("hour");
var m = document.getElementById("min");
var s = document.getElementById("sec");
var ampm = document.getElementById("ampm");

var currentDate = document.getElementById("date");
var currentMonth = document.getElementById("month");
var currentYear = document.getElementById("year");
var currentDay = document.getElementById("day");

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function clock(){
    var date = new Date();   

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var session = "AM";

    if(hours >= 12){
        session = "PM";
    }

    if(hours > 12){
        hours = hours - 12;
    }

    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(seconds < 10){
        seconds = "0" + seconds;
    }

    h.innerText = hours + " : ";
    m.innerText = minutes + " : ";
    s.innerText = seconds;
    ampm.innerText = session;

    currentDate.innerText = date.getDate();
    currentMonth.innerText = months[date.getMonth()];
    currentYear.innerText = date.getFullYear();
    currentDay.innerText = days[date.getDay()];
}

setInterval(clock, 1000);
clock();
