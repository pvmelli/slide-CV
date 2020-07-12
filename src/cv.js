import {showProjectDetails, hideProjectDetails} from './ui/project-page.js';
import {decreaseOpacity, increaseOpacity} from './ui/about-page.js';
import {manageSlideshow, manageDirectSlideshow} from './ui/slideshow.js';

export function initialize() {
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