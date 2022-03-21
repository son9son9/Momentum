let clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    console.log(date);

    console.log(typeof(date.getSeconds));

    clock.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function convertSecond(seconds) {
    if (seconds < '10') {
        
    }
}

setInterval(getClock, 1000);
//setTimeout(getClock, 2000);