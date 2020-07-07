import {showProjectDetails, hideProjectDetails} from './ui/project-page.js';
import {bookEffect} from './ui/book.js';
import {decreaseOpacity, increaseOpacity} from './ui/tecnologies.js'

export function initialize() {

    document.addEventListener('DOMContentLoaded', bookEffect)

    const projects = document.querySelectorAll('.project-polaroid');

    projects.forEach((project) => {
        project.addEventListener('mouseenter', showProjectDetails);
        project.addEventListener('mouseleave', hideProjectDetails);
    });

    const tecImages = document.querySelectorAll('.tec-img');

    tecImages.forEach((image) => {
        image.addEventListener('mouseenter', decreaseOpacity);
        image.addEventListener('mouseleave', increaseOpacity);
    });
}