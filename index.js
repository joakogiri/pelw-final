'use strict';

// Email Suscription
const mailCheckmark = document.getElementById('mail-checkmark');
const mailCheckbox = document.getElementById('mail-checkbox');
const checkmarkLabel = document.getElementById('mail-checkmark-label');

// Custom Checkmark
mailCheckmark.addEventListener('click', () =>
  mailCheckbox.getAttribute('checked')
    ? mailCheckbox.removeAttribute('checked')
    : mailCheckbox.setAttribute('checked', 'checked')
);

// Countdown
const dropCountdown = document.getElementById('drop-countdown');
const fechaLimite = new Date('Jul 8, 2022 18:00:00').getTime();

const countdown = setInterval(() => {
  const fechaHoy = new Date().getTime();
  const tiempoRestante = fechaLimite - fechaHoy;

  if (tiempoRestante < 0) {
    dropCountdown.innerHTML = 'Out now!';
    clearInterval(countdown);
  } else {
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segs = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    dropCountdown.innerHTML = `Quedan ${dias} días, ${
      horas > 9 ? horas : '0' + horas
    }:${mins > 9 ? mins : '0' + mins}:${segs > 9 ? segs : '0' + segs} hs.`;
  }
}, 1000);
