const imgs = [
    "0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg" 
]

const body = document.querySelector("body");
let savedBackground = localStorage.getItem("legacyBg");

// img 랜덤으로 받아서 반환
function imgShuffler() {
    return imgs[Math.floor(Math.random() * imgs.length)];
}

// img 랜덤으로 받아서 반환
function getImg() {
    let img = imgShuffler();

    // local에 저장된 기존 이미지와 비교하여 겹치면 계속 돌림.
    while(img == savedBackground) {
        img = imgShuffler();
        console.log(`${img}, ${savedBackground}`);
    }

    localStorage.setItem("legacyBg", img);
    return img;
}

function displayImg(img) {
    body.style = `background-image:url(/img/${img})`;
}

displayImg(getImg());