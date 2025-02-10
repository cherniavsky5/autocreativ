import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const slidersDefault = document.querySelectorAll('.js-slider-default');
  const slidersSecondary = document.querySelectorAll('.js-slider-secondary');
  const sliderPadding = document.querySelectorAll('.js-slider-padding');

  slidersDefault.forEach((slider) => {
    const splide = new Splide(slider, {
      // perPage: 4,
      gap: 20,
      perPage: 1,
      arrows: true,
      pagination: false,
      mediaQuery: 'min',
      breakpoints: {
        768: {
          perPage: 2,
        },
        1200: {
          perPage: 3,
        },
        1400: {
          perPage: 4,
        },
      },
    }).mount();

    transferArrows(slider, splide);
  });

  slidersSecondary.forEach((slider) => {
    const splide = new Splide(slider, {
      perPage: 1,
      padding: {
        right: 40,
      },
      gap: 20,
      arrows: true,
      pagination: false,
      mediaQuery: 'min',
      breakpoints: {
        768: {
          padding: {
            right: 270,
          },
        },
        1024: {
          perPage: 2,
          padding: 0,
        },
        1200: {
          perPage: 3,
        },
      },
    }).mount();

    if (window.innerWidth >= 768) {
      transferArrows(slider, splide);
    }
  });

  sliderPadding.forEach((slider) => {
    const splide = new Splide(slider, {
      perPage: 1,
      padding: {
        right: 90,
      },
      gap: 20,
      arrows: true,
      pagination: false,
      mediaQuery: 'min',
      breakpoints: {
        768: {
          perPage: 2,
          padding: 0,
        },
        1024: {
          perPage: 3,
        },
        1200: {
          perPage: 4,
        },
      },
    }).mount();

    transferArrows(slider, splide);
  });

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
