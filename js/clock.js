const clock = document.querySelector("#clock");

// 현재 시간 받아와서 HH:MM:SS 로 변환
function getClock() {
    const date = new Date();
    console.log(date);

    const hour = convertNum(date.getHours());
    const minute = convertNum(date.getMinutes());
    const second = convertNum(date.getSeconds());

    clock.innerHTML = hour + ':' + minute + ':' + second;
}

// 한자리수 시간 앞에 0 붙이기 방법 1
function convertNum(time) {
    if (time < '10') {
        time = '0' + time;
    }
    return time;
}
// 방법 2
function sliceNum(time) {
    return ('0' + time).slice(-2);
}

getClock();
setInterval(getClock, 1000);
//setTimeout(getClock, 2000);