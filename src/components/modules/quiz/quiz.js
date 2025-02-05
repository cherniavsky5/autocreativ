document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.js-quiz-form');

  if (form) {
    const buttonPrev = form.querySelector('.js-quiz-prev');
    const buttonNext = form.querySelector('.js-quiz-next');
    const steps = form.querySelectorAll('.js-quiz-step');
    const progress = form.querySelectorAll('.js-quiz-progress');
    const currentStep = form.querySelector('.js-quiz-current-step');
    const body = form.querySelector('.js-quiz-body');
    const submit = form.querySelector('.js-quiz-submit');

    const stepsCount = steps.length;
    let stepActive = 0;

    buttonPrev.addEventListener('click', (e) => {
      e.preventDefault();

      if (stepActive > 0) {
        stepActive--;

        steps[stepActive + 1].classList.remove('is-active');
        steps[stepActive].classList.add('is-active');

        progress[stepActive + 1].classList.remove('is-active');

        currentStep.innerText = stepActive + 1;

        buttonPrev.style.display = 'block';
      }

      if (stepActive === 0) {
        buttonPrev.style.display = 'none';
      }
    });

    buttonNext.addEventListener('click', (e) => {
      e.preventDefault();

      if (stepActive === stepsCount - 1) {
        body.style.display = 'none';
        submit.style.display = 'block';
      }

      if (stepActive < stepsCount - 1) {
        stepActive++;

        steps[stepActive - 1].classList.remove('is-active');
        steps[stepActive].classList.add('is-active');

        progress[stepActive].classList.add('is-active');

        currentStep.innerText = stepActive + 1;

        buttonPrev.style.display = 'block';
      }
    });
  }
});
