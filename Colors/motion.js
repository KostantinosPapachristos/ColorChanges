
let my_body = document.querySelector("#my_body");
let btnRed = document.querySelector("#btnRed");
let btnYellow = document.querySelector("#btnYellow");
let btnGreen = document.querySelector("#btnGreen");
let btnBlue = document.querySelector("#btnBlue");
let btnReset = document.querySelector("#btnReset");


btnRed.addEventListener('click', function () {
    my_body.style.background = "#e94560";
});

btnYellow.addEventListener('click', function () {
    my_body.style.background = "#ffd66b";
});

btnGreen.addEventListener('click', function () {
    my_body.style.background = "#61b15a";
});

btnBlue.addEventListener('click', function () {
    my_body.style.background = "#0278ae";
});

btnReset.addEventListener('click', function () {
    my_body.style.background = "#fff";
});