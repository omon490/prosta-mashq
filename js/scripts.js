// DOM ga oid elementlarni e'lon qilib olamiz
var elForm = document.querySelector(`.js-form`);
if (elForm) {
  var elInputFirst = elForm.querySelector(`.js-input-1`);
  var elInputSecond = elForm.querySelector(`.js-input-2`);
  var elInputThird = elForm.querySelector(`.js-input-3`);
  var elResult = elForm.querySelector(`.js-result`);
}
// Forma submit bo'lganda to'xtatib quyidagi funksiyani yozamiz
elForm.addEventListener(`submit`, function(evt) {

  evt.preventDefault();
  // inputlarga kiritilayotgan sonlarni Numberga aylantirib o'zgaruvchiga tenglab qo'yamiz
  var one = Number(elInputFirst.value);
  var two = Number(elInputSecond.value);
  var third = Number(elInputThird.value);
  var small = Math.min(one, two, third);
  var equal = `bir biriga teng sonlardan eng kichigini tanlab bo'lmaydiku")`;

  // Agar one two ga teng bo'lsa va two thirdga teng bo'lsa unda natijaga teng ni chiqaramiz, aks holda natija smallga teng bo'lsin
  if (one === two && two === third) {
    elResult.textContent = equal;
  } else {
    elResult.textContent = small;
  }

  // if bilan ham qilsa bo'ladi, bunda one two dan katta bo'lsa va bir vaqtning o'zida thirddan ham katta bo'lsa natijaga one ni chiqaramiz, shu tarzda ketaveradi
  // if (one > two && one > third) {
  //   elResult.textContent = one;
  // } else if (two > one && two > third) {
  //   elResult.textContent = two;
  // } else if (third > one && third > two) {
  //   elResult.textContent = third;
  // }
});

// IKKINCHI MASHQ
// DOMga oid elementlarni e'lon qilamiz
var elFormOy = document.querySelector(`.js-oy-form`);
if (elFormOy) {
  var elInputOy = elFormOy.querySelector(`.js-oy-input`);
  var elResultOy = elFormOy.querySelector(`.js-oy-result`);
}

// Submitni to'xtatib quyidagi funksiyani bajaramiz
elFormOy.addEventListener(`submit`, function(evt) {
  evt.preventDefault();
  // Kiritilayotgan sonni stringdan numberga o'tkazamiz va o'zgaruvchiga saqlab qo'yamiz
  var kiritilganSon = Number(elInputOy.value);

  // Agar kiritilayotgan sondan 1ni ayirib 7 ga bo'lganda qoldiq qolmasa oyning boshlang'ich xafta kuni natijaga chiqsin (masalan oy seshanbadan boshlansa seshanba), qoldiq 1 qolsa keyingi kunga to'g'ri kelsin yani chorshanba va shu tarzda davom etadi
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