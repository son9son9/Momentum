function getGeoSuc() {
    console.log("get Geo success!!");

    // const lat = 여기부터
}
function getGeoErr() {
    console.log("get Geo failed..");
}

navigator.geolocation.getCurrentPosition(getGeoSuc, getGeoErr);