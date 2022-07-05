'use strict';

const trackingBtn = document.getElementById('tracking-btn');
const trackingError = document.getElementById('tracking-error');
const trackingInput = document.getElementById('tracking-input');
const trackDate = document.getElementById('tracking-date');

const date = new Date();

const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
const month =
  date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
const year = `${date.getFullYear()}`;

const todayArr = [year, month, day];
const orArr = ['2022', '07', '13'];

function handleDate(inputDay, todayArr) {
  if (inputDay[0] <= todayArr[0]) {
    if (inputDay[1] <= todayArr[1]) {
      if (inputDay[2] <= todayArr[2]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function handleTracking(input, dateInput, errorElement) {
  const inputDate = dateInput.value.split('-');
  errorElement.innerHTML = '';
  if (!input.value) {
    errorElement.innerHTML = 'Ingrese un código de operación.';
  } else if (!dateInput.value) {
    errorElement.innerHTML = 'Ingrese la fecha de compra.';
  } else {
    if (handleDate(inputDate, todayArr)) {
      errorElement.classList.add('spinner');
      setTimeout(() => {
        errorElement.classList.remove('spinner');
        errorElement.innerHTML = 'Lo sentimos. Esa operación no existe.';
      }, 3000);
    } else {
      errorElement.innerHTML =
        'La fecha ingresada no puede ser mayor al día de hoy.';
    }
  }
}

trackingBtn.addEventListener('click', () =>
  handleTracking(trackingInput, trackDate, trackingError)
);
