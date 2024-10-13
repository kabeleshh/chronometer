
function display(){

    let date = new Date();

    let hour = twodig(date.getHours());
    let min = twodig(date.getMinutes());
    let sec = twodig(date.getSeconds());
    
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("second").innerHTML = sec;

    if(hour>=12){
        document.getElementById("meridiam").innerHTML = "PM";
    }
}

setInterval(display,1000)

function twodig(num){
    if(num<10){
        return "0"+num;
    }
    return num;
}