window.addEventListener('load', function () {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });


  let deadline = '2019-04-09';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)));

    return {
      'total' : t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      second = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        second.textContent = '00';
      } else {
        if (t.seconds.toString().length < 2) {
          second.textContent = '0' + t.seconds;
        } else {
          second.textContent = t.seconds;
        }
        if (t.minutes.toString().length < 2) {
          minutes.textContent = '0' + t.minutes;
        } else {
          minutes.textContent = t.minutes;
        }
        if (t.hours.toString().length < 2) {
          hours.textContent = '0' + t.hours;
        } else {
          hours.textContent = t.hours;
        }
      }
    }
  }
	setClock('timer', deadline);

	// Modal

	let overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		modalBtn = document.querySelectorAll('.popup-show');


	modalBtn.forEach((item) => {
		item.addEventListener('click', (event) => {
			overlay.style.display = 'block';
			event.target.classList.add('more-splash');
			document.body.style.overflow = 'hidden';
		});
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		modalBtn.forEach((item) => {
			item.classList.remove('more-splash');
		});
		document.body.style.overflow = '';
	});

	// Form
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	}

	let popupForm = document.querySelector('.main-form'),
		formCall = document.getElementById('form-call'),
		popupFormInput = popupForm.querySelectorAll('input'),
		formCallInput = formCall.querySelectorAll('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');


	let validInput = (input) => {
		input.forEach((item) => {
			item.addEventListener('input', function (event) {
				this.value = this.value.replace(/[^0-9+]/g, '');
			});
		});
	};

	validInput(popupFormInput);
	validInput(formCallInput);


	function sendForm(form) {
		form.addEventListener('submit', function (event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			let formData = new FormData(form);

			let request = new XMLHttpRequest();
			request.open('POST', 'server.php');
			request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

			let obj = {};

			formData.forEach(function (value, key) {
				obj[key] = value;
			});

			let json = JSON.stringify(obj);

			request.send(json);

			request.onreadystatechange = function () {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4 && request.status == 200) {
					statusMessage.innerHTML = message.success;
				} else {
					statusMessage.innerHTML = message.failure;
				}
			}

			let formInput = form.querySelectorAll('input');
			for (let i = 0; i < formInput.length; i++) {
				formInput[i].value = '';
			}
		});
	}
	sendForm(popupForm);
	sendForm(formCall);
});