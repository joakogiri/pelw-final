'use strict';

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
