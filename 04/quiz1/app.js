import todayPhoto from "./assets/datas.js";

const carousel = ($container, sectionCards) => {

  const DURATION = 500;
  let timerId = null;
  let $carouselSlides = null;
  let currentSlide = 0;
  let isMoving = false;
    
  const move = (currentSlide, duration = 0) => {
    if (duration) isMoving = true;
      
    $carouselSlides.style.setProperty('--duration', duration);
    $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  };

  // Event bindings
    document.addEventListener('DOMContentLoaded', () => {

    $container.innerHTML = `
        <div class="carousel-slides">
        ${[sectionCards[sectionCards.length - 1], ...sectionCards, sectionCards[0]].map(t => t).join('')}                
        </div> 
        <button class="carousel-control prev">&laquo;</button>
        <button class="carousel-control next">&raquo;</button>
    `

    $carouselSlides = document.querySelector('.carousel-slides');
  });

  window.onload = () => {
    const { offsetWidth } = $carouselSlides.querySelector('a');
    $container.style.width = `${offsetWidth}px`;
    $container.style.opacity = 1;

    move(++currentSlide);
    
    // Autoplay
    timerId = setInterval(() => move(++currentSlide, DURATION), 3000);
  };

    $container.onclick = ({ target }) => {
    if (!target.classList.contains('carousel-control') || isMoving) return;

    clearInterval(timerId);

    const delta = target.classList.contains('prev') ? -1 : 1;
    currentSlide += 1 * delta;
    move(currentSlide, DURATION);
  };

  $container.ontransitionend = () => {
    isMoving = false;

    const delta = currentSlide === 0 ? 1 : currentSlide === sectionCards.length + 1 ? -1 : 0;

    if (!delta) return;

    currentSlide += sectionCards.length * delta;
    move(currentSlide);
  };

};

const generateSectionCard = () => {
    return todayPhoto.map(({ url, img, title, id }) => 
        (`
            <a id="${id}" href="${url}" target="_blank">
                <img src="${img}" alt="${title}"/>
                <span>${title}</span>
            </a>
        `)
    );
} 

const sectionCards = generateSectionCard();
carousel(document.querySelector('.carousel'), sectionCards);
