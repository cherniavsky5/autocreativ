import '@components/layout/header/header.js';
import '@components/ui/modal/modal.js';
import '@components/ui/form/select/select.js';
import '@components/ui/form/input/input.js';
import '@components/widgets/menu/menu-primary/menu-primary.js';
import '@components/modules/hero/hero.js';
import '@components/modules/slider/slider.js';
import '@components/modules/quiz/quiz.js';
import '@components/modules/detail/detail.js';
import { Fancybox } from '@fancyapps/ui';

document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind('[data-fancybox]', {});

  const faqCards = document.querySelectorAll('.card-faq__header');

  faqCards.forEach((el) => {
    el.addEventListener('click', () => {
      el.closest('.card-faq').classList.toggle('is-opened');
    });
  });
});
