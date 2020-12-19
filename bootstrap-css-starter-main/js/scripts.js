var elForm = document.querySelector(`.js-form`);
if (elForm) {
  var elInputFirst = elForm.querySelector(`.js-input-1`);
  var elInputSecond = elForm.querySelector(`.js-input-2`);
  var elInputThird = elForm.querySelector(`.js-input-3`);
  var elResult = elForm.querySelector(`.js-result`);
}

elForm.addEventListener(`submit`, function(evt) {

  evt.preventDefault();
  var one = Number(elInputFirst.value);
  var two = Number(elInputSecond.value);
  var third = Number(elInputThird.value);
  var small = Math.min(one, two, third);
  var teng = `bir biriga teng sonlardan eng kichigini tanlamoqchimisiz brat:)`;

  if (one === two && two === third) {
    elResult.textContent = teng;
  } else {
    elResult.textContent = small;
  }
  // if (one > two && one > third) {
  //   elResult.textContent = one;
  // } else if (two > one && two > third) {
  //   elResult.textContent = two;
  // } else if (third > one && third > two) {
  //   elResult.textContent = third;
  // }
});

var elFormOy = document.querySelector(`.js-oy-form`);
if (elFormOy) {
  var elInputOy = elFormOy.querySelector(`.js-oy-input`);
  var elResultOy = elFormOy.querySelector(`.js-oy-result`);
}

elFormOy.addEventListener(`submit`, function(evt) {
  evt.preventDefault();

  var kiritilganSon = Number(elInputOy.value);

   if ((kiritilganSon-1) % 7 === 0) {
    elResultOy.textContent = `Dekabrning ${kiritilganSon} sanasi Seshanba ekan`;
   } else if ((kiritilganSon-1) % 7 === 1) {
     elResultOy.textContent = `Dekabrning ${kiritilganSon} sanasi Chorshanba ekan`;
   } else if ((kiritilganSon-1) % 7 === 2) {
     elResultOy.textContent = `Dekabrning ${kiritilganSon} sanasi Payshanba ekan`;
   } else if ((kiritilganSon-1) % 7 === 3) {
     elResultOy.textContent = `Dekabrning ${kiritilganSon} sanasi Juma ekan`;
   } else if ((kiritilganSon-1) % 7 === 4) {
     elResultOy.textContent = `Dekabrning ${kiritilganSon} sanasi Shanba ekan`;
   } else if ((kiritilganSon-1) % 7 === 5) {
     elResultOy.textContent = `Dekabrning ${kiritilganSon} sanasi Yakshanba ekan`;
   } else if ((kiritilganSon-1) % 7 === 6) {
     elResultOy.textContent = `Dekabrning ${kiritilganSon} sanasi Dushanba ekan`;
   }
});