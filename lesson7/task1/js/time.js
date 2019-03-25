let timeElement = document.querySelector('.time'),
  timerId = setTimeout(function checkTime() {
    let date = new Date(),
      second = date.getSeconds().toString(),
      minutes = date.getMinutes().toString(),
      hours = date.getHours().toString();

    if (second.length < 2) {
      second = '0' + second;
    }
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    if (hours.length < 2) {
      hours = '0' + hours;
    }
    timeElement.textContent = hours + ':' + minutes + ':' + second;

    setTimeout(checkTime, 1000);
  });

