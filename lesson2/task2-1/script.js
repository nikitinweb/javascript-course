window.addEventListener('DOMContentLoaded', () => {
  const listDay = document.querySelector('.list-day');

  let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вск'],
    numDay = 3;

  week.forEach(function (day, i) {
    let itemList = document.createElement('li');

    i++;
    if (i == numDay) {
      itemList.innerHTML = `<li><i>${day}</i></li>`;
    } else if (i == 6 || i == 7) {
      itemList.innerHTML = `<li><strong>${day}</strong></li>`;
    } else {
      itemList.innerHTML = `<li>${day}</li>`;
    }

    listDay.appendChild(itemList);
  });

  let arr = ['377', '439', '888887', '70009998', '504923', '85723', '394234'];

  arr.forEach(function (num) {
    if (num.substr(0, 1) == 3 || num.substr(0, 1) == 7) {
      console.log(num);
    }
  });

});