import IMask from 'imask';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('[data-mask]');

  inputs.forEach((input) => {
    let options = {
      mask: input.dataset.mask,
    };

    if (input.dataset.mask === 'number') {
      options = {
        mask: Number,
        radix: '.',
        thousandsSeparator: ' ',
        scale: 0,
      };
    }

    IMask(input, options);
  });
});
