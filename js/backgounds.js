const imgs = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"
]

const BACKGROUND_KEY = "background"

const body = document.querySelector("body");
const imgTag = document.createElement("img");

let savedBackground = localStorage.getItem(BACKGROUND_KEY);

imgTag.setAttribute("class", "background");
body.appendChild(imgTag);

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
    
    localStorage.setItem(BACKGROUND_KEY, img);
    return img;
}

function displayImg(img) {
    body.style = `background-image:url(/img/dogs/${img});`;
}

displayImg(getImg());