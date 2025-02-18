import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.js-slider-detail');

  if (slider) {
    const thumbs = document.querySelector('.js-detail-thumbnails');
    const thumbsElements = thumbs.querySelectorAll('.detail__photo:not(.js-thumbnail-more)');

    const sliderInst = new Splide(slider, {
      gap: 10,
      perPage: 1,
      arrows: true,
      pagination: false,
      mediaQuery: 'min',
      padding: {
        right: 20,
      },
      breakpoints: {
        1200: {
          padding: false,
        },
      },
    }).mount();

    sliderInst.on('move', (index) => {
      setActiveElement(thumbsElements, index);
    });

    thumbsElements.forEach((thumbElement, index) => {
      thumbElement.addEventListener('click', () => {
        sliderInst.go(index);
      });
    });

    setActiveElement(thumbsElements, sliderInst.index);
  }

  function setActiveElement(els, index) {
    els.forEach((el) => {
      el.classList.remove('is-active');
    });

    els[index].classList.add('is-active');
  }
});
