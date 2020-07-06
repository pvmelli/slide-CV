import {showProjectDetails, hideProjectDetails} from './ui/project-page.js';

export function initialize() {
    const projects = document.querySelectorAll('.project-polaroid');

    projects.forEach((project) => {
        project.addEventListener('mouseenter', showProjectDetails);
        project.addEventListener('mouseleave', hideProjectDetails)
    });
}