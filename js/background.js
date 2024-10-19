const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "0.jpg",
];

const chosenImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundAttachment = "fixed";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";



