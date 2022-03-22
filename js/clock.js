const clock = document.querySelector("#clock");

// 현재 시간 받아와서 HH:MM:SS 로 변환
function getClock() {
    const date = new Date();

    const hour = convertNum(date.getHours());
    const minute = convertNum(date.getMinutes());
    const second = convertNum(date.getSeconds());

    console.log(date);
    clock.innerHTML = hour + ':' + minute + ':' + second;
}

// 방법 1: 한자리수 시간 앞에만 0 붙이기
function convertNum(time) {
    if (time < '10') {
        time = '0' + time;
    }
    return time;
}
// 방법 2: 앞에 0 붙이고 스트링 자르기
function sliceNum(time) {
    return ('0' + time).slice(-2);
}

getClock();
setInterval(getClock, 1000);
//setTimeout(getClock, 2000);