
function display(){

    let date = new Date();

    let hour = date.getHours();
    let min = twodig(date.getMinutes());
    let sec = twodig(date.getSeconds());

    if(hour>=12){
        document.getElementById("meridiam").innerHTML = "PM";
    }

    if(hour>12){
        hour = twodig(hour - 12);
    }
    
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;    
    document.getElementById("second").innerHTML = sec;
}

setInterval(display,1000)

function twodig(num){
    if(num<10){
        return "0"+num;
    }
    return num;
}