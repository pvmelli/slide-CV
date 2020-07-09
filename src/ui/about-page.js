export function decreaseOpacity (e) {
    const image = e.target.children[0];

    image.style.opacity = 0.5;
};

export function increaseOpacity() {
    const tecImages = document.querySelectorAll('.tec-img');

    tecImages.forEach((container) => {
        const image = container.children[0];
        image.style.opacity = 1;
    });    
};