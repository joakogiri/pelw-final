'use strict';

// Email Suscription - Custom Checkmark
const mailCheckmark = document.getElementById('mail-checkmark');
const mailCheckbox = document.getElementById('mail-checkbox');

mailCheckmark.addEventListener('click', () =>
  mailCheckbox.toggleAttribute('checked')
);

// Homepage - Countdown
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

/****** CART  ******/
// Elementos
const cartBtn = document.getElementById('cart-btn');
const purchaseBtn = document.getElementById('purchase-btn');
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

  itemsAdded[lastItem].forEach((e) => {
    const parraf = document.createElement('p');
    parraf.innerHTML = e;
    li.appendChild(parraf);
  });

  ulCartList.appendChild(li);

  const add = itemsAdded[lastItem][1];
  totalPay += add;
  paymentNum.innerHTML = totalPay.toFixed(3);
}

for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener('click', () => handleCartList(i));
}

trashBtn.addEventListener('click', () => popList());

function popList() {
  itemsAdded = [];
  handleEmptyList();
}
