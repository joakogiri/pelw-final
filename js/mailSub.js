'use strict';

const mailCheckmark = document.getElementById('mail-checkmark');
const mailCheckbox = document.getElementById('mail-checkbox');

mailCheckmark.addEventListener('click', () =>
  mailCheckbox.toggleAttribute('checked')
);
