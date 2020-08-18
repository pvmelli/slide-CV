let slideIndex = 1;

export function manageSlideshow() {
    const $prevButton = document.querySelector('#prev-button');
    $prevButton.addEventListener('click', () => {plusDivs(-1)});

    const $nextButton = document.querySelector('#next-button');
    $nextButton.addEventListener('click', () => {plusDivs(1)});
    showSlides(slideIndex, setBGColor, 1);
}

export function manageDirectSlideshow() {
  const $aboutLink = document.querySelector('#about-link');
  $aboutLink.addEventListener('click', () => {directDiv(1)});

  const $projectLink = document.querySelector('#projects-link');
  $projectLink.addEventListener('click', () => {directDiv(2)});

  const $contactLink = document.querySelector('#contact-link');
  $contactLink.addEventListener('click', () => {directDiv(3)});
}

function directDiv(n) {
  const newIndex = n;
  
  if(newIndex > slideIndex){
    slideIndex = n;
    showSlides(newIndex, setBGColor, 1);
  } else {
    slideIndex = n;
    showSlides(newIndex, setBGColor, -1);
  };
};

export function plusDivs(n) {
  const newIndex = slideIndex += n;
  showSlides(newIndex, setBGColor, n);
};

function showSlides(n, setBGColorCallback = () => {}, position) {
  let i;
  let x = document.getElementsByClassName("page");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = 0;  
    x[i].classList.add('not-display');
    x[i].classList.remove('slide-right');
    x[i].classList.remove('slide-left');
  }
  x[slideIndex-1].classList.remove('not-display');
  if (position < 0) {
    x[slideIndex-1].classList.add('slide-right');
  }else {
    x[slideIndex-1].classList.add('slide-left');
  }  
  x[slideIndex-1].style.opacity = 1;
  

  setBGColorCallback(slideIndex);
};

function setBGColor(slideIndex) {
        if(slideIndex % 2 === 0) {
            document.body.style.backgroundColor = '#e77894';
        } else {
            document.body.style.backgroundColor = '#78d5d8';
        }
};

