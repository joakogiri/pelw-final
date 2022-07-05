const accordion = document.querySelectorAll('.faq-accordion');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', () =>
    accordion[i].lastElementChild.classList.toggle('hidden')
  );
}
