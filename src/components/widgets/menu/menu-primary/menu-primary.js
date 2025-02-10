document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.js-menu-button');
  const buttonIcon = button.querySelector('use');
  const openedClass = 'page--menu-primary-opened';
  let isOpened = false;

  if (button) {
    button.addEventListener('click', (e) => {
      if (isOpened) {
        document.body.classList.remove(openedClass);
        buttonIcon.setAttribute('href', '/src/assets/img/icon-sprite.svg#menu');
      } else {
        document.body.classList.add(openedClass);
        buttonIcon.setAttribute('href', '/src/assets/img/icon-sprite.svg#close');
      }

      isOpened = !isOpened;
    });
  }
});
