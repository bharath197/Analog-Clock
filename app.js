const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.min');
const secondHand = document.querySelector('.second');

function setTime(){
    const date = new Date();

    const seconds = date.getSeconds();
    const secondDegree = (seconds/60)*360 + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    const min = date.getMinutes();
    const minDegree = (min/60)*360 + (seconds/60)*6 + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = date.getHours();
    const hourDegree = (hour/12)*360 + (min/60)*30 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

}
setTime();
setInterval(setTime, 1000);