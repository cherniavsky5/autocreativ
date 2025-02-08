document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const offset = header.offsetTop + header.offsetHeight;
  const className = 'page--header-fixed';

  function handleScroll() {
    if (window.scrollY > offset) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }

  handleScroll();

  window.addEventListener('scroll', handleScroll);
});
