import {showProjectDetails, hideProjectDetails} from './ui/project-page.js';
import {decreaseOpacity, increaseOpacity} from './ui/about-page.js';
import {manageSlideshow, manageDirectSlideshow} from './ui/slideshow.js';
import {manageSwipe} from './ui/mobile-swipe.js';

export function initialize() {
    let query = window.matchMedia('(max-width: 800px)');
    query.addListener(detectDevice);
    if(query.matches){
    manageSwipe()
    };

    const projects = document.querySelectorAll('.project-polaroid');

    projects.forEach((project) => {
        project.addEventListener('mouseenter', showProjectDetails);
        project.addEventListener('mouseleave', hideProjectDetails)
    });

    const tecImages = document.querySelectorAll('.tec-img');

    tecImages.forEach((image) => {
        image.addEventListener('mouseenter', decreaseOpacity);
        image.addEventListener('mouseleave', increaseOpacity);
    });

    manageSlideshow();
    manageDirectSlideshow();
};

function detectDevice(e) {
    if (e.matches) {
        manageSwipe();
        console.log('manageswipe esta activado')
    }
};