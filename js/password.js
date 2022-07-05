'use strict';

const mailPass = document.getElementById('mail-password');
const rePass = document.getElementById('re-password');
const submitBtn = document.getElementById('submit-btn');
const passwordError = document.getElementById('password-error');
const confirmErr = document.getElementById('confirm-error');

const passMsg = 'Tu contraseña debe tener al menos ocho (8) caracteres.';
const confirmPassMsg = 'Tus contraseñas no coinciden.';

const errColor = '#ff3b3b';
const okColor = '#45CB85';

mailPass.addEventListener('input', () =>
  mailPass.value.length < 8
    ? ((passwordError.innerHTML = passMsg), (submitBtn.type = 'button'))
    : ((passwordError.innerHTML = ''), (submitBtn.type = 'submit'))
);

rePass.addEventListener('input', () => {
  if (rePass.value !== mailPass.value) {
    rePass.style.borderColor = errColor;
    mailPass.style.borderColor = errColor;
    confirmErr.innerHTML = confirmPassMsg;
    submitBtn.type = 'button';
  } else if (rePass.value === mailPass.value) {
    rePass.style.borderColor = okColor;
    mailPass.style.borderColor = okColor;
    confirmErr.innerHTML = '';
    submitBtn.type = 'submit';
  }
});
