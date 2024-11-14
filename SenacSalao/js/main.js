
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');
menuIcon.addEventListener('click', ()=>{

    if(ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    }else{
        ul.classList.add('ativo')
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    }
}

);
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-images img');
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;
  slides.forEach((slide, i) => {
    slide.style.display = (i === currentIndex) ? 'block' : 'none';
  });
}

function moveSlide(direction) {
  currentIndex += direction;
  showSlide(currentIndex);
}



