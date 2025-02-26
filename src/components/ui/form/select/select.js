import Choices from 'choices.js';

document.addEventListener('DOMContentLoaded', () => {
  const selects = document.querySelectorAll('.js-select');

  if (selects.length) {
    selects.forEach((select) => {
      new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
      });
    });
  }
});
