function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param); 
}

const carPages = {
    "Range Rover 2024": "car1.html",
    "Land Rover Defender 2024": "car2.html",
    "Rolls-Royce Dawn 2021": "car3.html", 
    "Mercedes S-Class 63 E AMG 2024": "car4.html", 
    "Mini Cooper 2024": "car5.html", 
    "Toyota Prius 2024": "car6.html", 
    "Lamborghini Countach LP5000": "car7.html", 
    "Lamborghini Murcielago LP640 2007": "car8.html", 
    "Ferrari Roma 2024": "car9.html", 
    "Porsche 911 Turbo S 2024": "car10.html" 
};

document.addEventListener("DOMContentLoaded", function () {
    let car_name = getQueryParam("car_name"); 
    let car_price = getQueryParam("car_price");

    if (car_name) {
        document.getElementById("car_name").innerHTML = decodeURIComponent(car_name); // Decode and set car name
    }

    if (car_price) {
        document.getElementById("car_price").innerHTML = decodeURIComponent(car_price); // Decode and set car price
    }

    if (car_name && carPages[car_name]) {
        document.getElementById("car_link").href = carPages[car_name];
    }
});