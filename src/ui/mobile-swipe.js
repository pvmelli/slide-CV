import {plusDivs} from './slideshow.js';

let x0;
let x1;

export function manageSwipe () {
    // cambiar la position de la barrita del header
    const container = document.querySelector('#page-content');
    container.addEventListener('touchstart', lock, false);
    container.addEventListener('touchend', move, false);

    const $aboutLink = document.querySelector('#about-link');
    $aboutLink.addEventListener('click', () => {directSwipeBar(1)});
  
    const $projectLink = document.querySelector('#projects-link');
    $projectLink.addEventListener('click', () => {directSwipeBar(2)});
  
    const $contactLink = document.querySelector('#contact-link');
    $contactLink.addEventListener('click', () => {directSwipeBar(3)});

    
};

function lock(e) {
    x0 = e.touches[0].clientX;
};

function move(e) {
    x1 = e.changedTouches[0].clientX;
    const difference = Math.abs(x1 - x0);
    if (difference > 100) {
        x0 > x1 ? manageDirection(1) : manageDirection(-1);
    };
};

function manageDirection(direction) {
    plusDivs(direction);
    moveSwipeBar(direction);
};

function moveSwipeBar(position) {
    const swipeBar = document.querySelector('#swipe-bar');
    const onlyNumberRegex = /\d+/g;
    let currentPosition = Number((swipeBar.style.left.match(onlyNumberRegex))[0]);
    let newPosition;


    if (currentPosition === 72){
        position > 0 ? newPosition = 10 : newPosition = 40;
    } else if (currentPosition === 10) {
        position > 0 ? newPosition = 40 : newPosition = 72;
    } else {
        position > 0 ? newPosition = 72 : newPosition = 10;
    };

    swipeBar.style.left = `${newPosition}vw`;
};

function directSwipeBar(position) {
    const swipeBar = document.querySelector('#swipe-bar');

    if(position === 1){
        swipeBar.style.left = '10vw';
    } else if (position === 2) {
        swipeBar.style.left = '40vw';
    } else if (position === 3) {
        swipeBar.style.left = '72vw'; 
    };

};