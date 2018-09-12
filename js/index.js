const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.slider__button');
let timeout = false;
let timer;
let images = ["img/1.png","img/2.png","img/3.png","img/4.png"];
let img = 1;

buttons[0].addEventListener('click', () => { getImg(-1); });
buttons[1].addEventListener('click', () => { setTimer(); });
buttons[2].addEventListener('click', () => { getImg(); });

document.addEventListener('keyup', event => {
    switch (event.keyCode) {
        case 177:
        case 37:
            getImg(-1);
            break;
        case 176:   
        case 39:
            getImg();
            break;
        case 179:
            setTimer();
        break;
    }
});

const getImg = (next = 1) => {
    clearTimeout(timer);
    if ( next === -1 && img === 0) {
        img = images.length-1;
    }
    else if ( next === 1 && img === images.length-1) {
        img = 0;
    }
    else {
        img += next;
    }
    if ( timeout === true ) {
        changeImg();
        timer = setTimeout(function(){ getImg(); }, 1000);
    }
    else {
        changeImg();
    }
}

const changeImg = () => {
    slider.src = images[img];
}

const setTimer = () => {
    timeout = timeout? false:true ;
    getImg();
}