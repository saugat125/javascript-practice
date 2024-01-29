let clock = document.getElementById('clock');

function displayTime(){
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = 'AM';

    if (hrs === 0) {
      hrs = 12;
    }
    if (hrs>12){
        hrs = hrs - 12;
        ampm = 'PM';
    }

    let time = `${hrs}:${min}:${sec}:${ampm}`;

    clock.innerHTML = time;
}

displayTime();
setInterval(displayTime,1000);