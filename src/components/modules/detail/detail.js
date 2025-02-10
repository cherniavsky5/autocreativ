import Splide from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.js-slider-detail');
  const thumbs = document.querySelector('.js-detail-thumbnails');
  const thumbsElements = thumbs.querySelectorAll('.detail__photo');

  const sliderInst = new Splide(slider, {
    gap: 20,
    perPage: 1,
    arrows: true,
    pagination: false,
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

  function setActiveElement(els, index) {
    els.forEach((el) => {
      el.classList.remove('is-active');
    });

    els[index].classList.add('is-active');
  }
});
