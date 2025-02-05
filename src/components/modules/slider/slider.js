import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const slidersDefault = document.querySelectorAll('.js-slider-default');
  const slidersSecondary = document.querySelectorAll('.js-slider-secondary');

  if (slidersDefault.length) {
    slidersDefault.forEach((slider) => {
      new Splide(slider, { perPage: 4, gap: 20, pagination: false }).mount();
    });
  }

  if (slidersSecondary.length) {
    slidersSecondary.forEach((slider) => {
      new Splide(slider, { perPage: 3, gap: 20, pagination: false }).mount();
    });
  }
});
