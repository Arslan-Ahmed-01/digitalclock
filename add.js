
var h = document.getElementById("hour")
var m = document.getElementById("min")
var currentdate = document.getElementById("date")
var currentday = document.getElementById("day")
var arrayday =["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday",];
function clock(){
    var date = new Date();
    h.innerText = date.getHours() + ":"
    m.innerText = date.getMinutes() + ":"  + date.getSeconds()
    currentdate.innerText = date.getDate()
    currentday.innerText = arrayday[date.getDay()]
}

setInterval(clock,1000)


