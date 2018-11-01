const header = document.querySelector('.header');
let oClock = document.createElement('div');
oClock.className = 'header__oclock';
header.appendChild(oClock);
let spanHours = document.createElement('span');
spanHours.className = 'header__time';
let spanMinutes = spanHours.cloneNode(true);
let spanSeconds = spanHours.cloneNode(true);
oClock.appendChild(spanHours);
oClock.appendChild(spanMinutes);
oClock.appendChild(spanSeconds);

function setTime(){
    let date;
    let hours;
    let minutes;
    let seconds;
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    function time(number){
        return (number < 10)
            ? '0' + number
            : number;
    }
    spanHours.innerHTML = `${time(hours)}`;
    spanMinutes.innerHTML = `:${time(minutes)}`;
    spanSeconds.innerHTML = `:${time(seconds)}`;

    setTimeout(setTime, 1000);
}

export default setTime;

