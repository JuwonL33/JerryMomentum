const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// html에 element 만들기
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// 만든 이미지를 document의 body에 child로 append하기
// append : 가장 마지막에 붙이기, prepend : 가장 앞에 붙이기.
document.body.appendChild(bgImage);