import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const slidersDefault = document.querySelectorAll('.js-slider-default');
  const slidersSecondary = document.querySelectorAll('.js-slider-secondary');

  if (slidersDefault.length) {
    slidersDefault.forEach((slider) => {
      const splide = new Splide(slider, {
        perPage: 4,
        gap: 20,
        arrows: true,
        pagination: false,
      }).mount();

      transferArrows(slider, splide);
    });
  }

  if (slidersSecondary.length) {
    slidersSecondary.forEach((slider) => {
      const splide = new Splide(slider, {
        perPage: 3,
        gap: 20,
        arrows: false,
        pagination: false,
      }).mount();

      transferArrows(slider, splide);
    });
  }

  function transferArrows(slider, splide) {
    const section = slider.closest('.section');

    if (section) {
      const navigation = splide.Components.Arrows;
      const arrows = section.querySelector('.section__arrows');

      if (arrows) {
        arrows.appendChild(navigation.arrows.prev);
        arrows.appendChild(navigation.arrows.next);
      }
    }
  }
});
