import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.js-slider-default');

  if (sliders.length) {
    sliders.forEach((slider) => {
      new Splide(slider, { perPage: 4, gap: 20, pagination: false }).mount();
    });
  }
});
