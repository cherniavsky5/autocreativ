import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.js-hero-slider');

  if (slider) {
    const splide = new Splide(slider, {
      type: 'fade',
      arrows: true,
      pagination: false,
    }).mount();
  }
});
