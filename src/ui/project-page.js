export function showProjectDetails(e) {
    const $polaroidElements = e.target.children;

    if ($polaroidElements.length === 2) {
        const $polaroidImage = $polaroidElements[0];
        const $projectInfo = $polaroidElements[1];

        $polaroidImage.classList.add('blur-image');
        $projectInfo.style.opacity = 1;
    };   

};

export function hideProjectDetails() {
        const $projectInfoGroup = document.querySelectorAll('.project-info');
        $projectInfoGroup.forEach((projectInfo) => {
            projectInfo.style.opacity = 0;
        });
    
        const $polaroidImageGroup = document.querySelectorAll('.project-image');
    
        $polaroidImageGroup.forEach((polaroidImage) => {
            polaroidImage.classList.remove('blur-image');
        });

};