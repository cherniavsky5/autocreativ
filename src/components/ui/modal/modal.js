import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-modal-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => event.preventDefault());
  });

  MicroModal.init({
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    openTrigger: 'data-modal-trigger',
    closeTrigger: 'data-modal-close',
  });
});
