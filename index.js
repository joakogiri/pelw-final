'use strict';

// Email Suscription - Custom Checkmark

if (document.URL.includes('index.html')) {
  const mailCheckmark = document.getElementById('mail-checkmark');
  const mailCheckbox = document.getElementById('mail-checkbox');

  mailCheckmark.addEventListener('click', () =>
    mailCheckbox.toggleAttribute('checked')
  );
}

// Password Check - 8 Caracteres
if (
  document.URL.includes('login.html') ||
  document.URL.includes('sign-up.html')
) {
  const mailPass = document.getElementById('mail-password');
  const submitBtn = document.getElementById('submit-btn');
  const passwordError = document.getElementById('password-error');

  const mes = 'Tu contraseña debe tener al menos ocho (8) caracteres.';

  mailPass.addEventListener('input', () =>
    mailPass.value.length < 8
      ? ((passwordError.innerHTML = mes), (submitBtn.type = 'button'))
      : ((passwordError.innerHTML = ''), (submitBtn.type = 'submit'))
  );
}

// Homepage - Countdown 8 de Julio 6pm
const dropCountdown = document.getElementById('drop-countdown');
const fechaLimite = new Date('Jul 8, 2022 18:00:00').getTime();

const countdown = setInterval(() => {
  if (document.URL.includes('index.html')) {
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
      const mins = Math.floor(
        (tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)
      );
      const segs = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

      dropCountdown.innerHTML = `Quedan ${dias > 0 ? dias + ' días,' : ''} ${
        horas > 9 ? horas : '0' + horas
      }:${mins > 9 ? mins : '0' + mins}:${segs > 9 ? segs : '0' + segs} hs.`;
    }
  } else {
    clearInterval(countdown);
  }
}, 1000);

// Cart
const cartBtn = document.getElementById('cart-btn');
const buyBtn = document.getElementById('buy-btn');
const trashBtn = document.getElementById('trash-btn');
const cartList = document.getElementById('cart-list');
const ulCartList = cartList.firstElementChild;
const paymentNum = document.getElementById('payment-num');
const addToCart = document.querySelectorAll('.add-to-cart');
const itemsList = [
  ['Stronghold SG', 15.999],
  ['YellowBee', 11.999],
  ['Spicy', 10.499],
  ['Tornado', 9.895],
];
let itemsAdded = [];
let totalPay = 0;

cartBtn.addEventListener(
  'click',
  () => (cartList.classList.toggle('hidden'), handleEmptyList())
);

const handleEmptyList = () => {
  if (itemsAdded.length === 0) {
    ulCartList.innerHTML = '';
    const p = document.createElement('p');
    p.innerHTML = 'Tu carrito está vacío';
    ulCartList.appendChild(p);

    totalPay = 0;
    paymentNum.innerHTML = totalPay;

    buyBtn.href = 'shop.html';
  }
};

function handleCartList(indexArr) {
  // quita el primer <p></p> agregado
  if (itemsAdded.length === 0) {
    ulCartList.innerHTML = '';
  }

  const li = document.createElement('li');

  itemsAdded.push(itemsList[indexArr]);

  const lastItem = itemsAdded.length - 1;

  // recorre el array con la data del item agregado
  // y lo agrega al html
  itemsAdded[lastItem].forEach((e) => {
    const parraf = document.createElement('p');
    parraf.innerHTML = e;
    li.appendChild(parraf);
  });

  ulCartList.appendChild(li);

  // agrega la suma total al html
  const add = itemsAdded[lastItem][1];
  totalPay += add;
  paymentNum.innerHTML = totalPay.toFixed(3);

  buyBtn.href = 'my-account.html';
}

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener('click', () => handleCartList(i));
}

trashBtn.addEventListener('click', () => popList());

function popList() {
  itemsAdded = [];
  handleEmptyList();
}

// FAQ Accordion
if (document.URL.includes('faq-tos.html')) {
  const accordion = document.querySelectorAll('.faq-accordion');

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () =>
      accordion[i].lastElementChild.classList.toggle('hidden')
    );
  }
}

// Fake Tracking
if (document.URL.includes('my-purchases.html')) {
  const trackingBtn = document.getElementById('tracking-btn');
  const trackingError = document.getElementById('tracking-error');
  const trackingInput = document.getElementById('tracking-input');

  trackingBtn.addEventListener('click', () =>
    handleTracking(trackingInput, trackingError)
  );
}

function handleTracking(input, errorElement) {
  errorElement.innerHTML = '';
  if (!input.value) {
    errorElement.innerHTML = 'Ingrese un código de operación.';
  } else {
    errorElement.classList.add('spinner');
    setTimeout(() => {
      errorElement.classList.remove('spinner');
      errorElement.innerHTML = 'Lo sentimos. Esa operación no existe.';
    }, 3000);
  }
}
