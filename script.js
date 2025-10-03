// script.js — small behaviour: contact form validation + project modal population

// Bootstrap form validation (client-side)
(function () {
  'use strict'
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      // Example behavior: show a confirmation and reset (replace with real backend call)
      alert('Thank you! Your message has been received.');
      form.reset();
      form.classList.remove('was-validated');
    } else {
      form.classList.add('was-validated');
    }
  }, false);
})();


// Project modal content injection (re-usable modal)
(function () {
  const projModal = document.getElementById('projModal');
  if (!projModal) return;

  projModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    // data attributes from button
    const title = button.getAttribute('data-title') || 'Project';
    const desc = button.getAttribute('data-desc') || 'Case study details are not provided.';
    const live = button.getAttribute('data-live') || '#';

    const modalTitle = projModal.querySelector('.modal-title');
    const modalBody = projModal.querySelector('.modal-body');
    const liveLink = document.getElementById('projLiveLink');

    modalTitle.textContent = title;
    modalBody.textContent = desc;
    liveLink.href = live;
  });
})();
