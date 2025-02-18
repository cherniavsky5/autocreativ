document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.js-menu-button');
  const openedClass = 'page--menu-primary-opened';
  let isOpened = false;

  if (button) {
    button.addEventListener('click', (e) => {
      if (isOpened) {
        document.body.classList.remove(openedClass);
      } else {
        document.body.classList.add(openedClass);
      }

      isOpened = !isOpened;
    });
  }
});
