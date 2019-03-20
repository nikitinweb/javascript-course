let startBtn = document.getElementById('start'),
  budgetValue = document.querySelector('.budget-value'),
  levelValue = document.querySelector('.level-value'),
  expensesValue = document.querySelector('.expenses-value'),
  optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
  incomeValue = document.querySelector('.income-value'),
  monthSavingsValue = document.querySelector('.monthsavings-value'),
  yearSavingsValue = document.querySelector('.yearsavings-value'),
  expensesItem = document.querySelectorAll('.expenses-item'),
  button = document.getElementsByTagName('button'),
  expensesItemBtn = button[0],
  optionalExpensesBtn = button[1],
  countBudgetBtn = button[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  chooseIncome = document.querySelector('#income'),
  chooseSavings = document.querySelector('#savings'),
  chooseSum = document.querySelector('#sum'),
  choosePercent = document.querySelector('#percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value'),
  dayBudgetValue = document.querySelector('.daybudget-value'),
  disabledButton = [expensesItemBtn, optionalExpensesBtn, countBudgetBtn];

disabledButton.forEach(function (item) {
  item.classList.add("button_disabled");
});

let money, time;

startBtn.addEventListener('click', function () {
  time = prompt("Введите дату в формате YYYY-MM-DD", "1990-01-01");
  money = +prompt("Ваш бюджет на месяц?", 10000);

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", 10000);
  }

  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed(); // Выводим на страницу и округляем

  time = new Date(Date.parse(time)); // Преобразование даты
  yearValue.value = time.getFullYear();
  monthValue.value = time.getMonth() + 1;
  dayValue.value = time.getDate();

  countBudgetBtn.classList.remove("button_disabled");
});

expensesItemBtn.addEventListener('click', function () {
  let sumExpenses = checkChangeExpenses();
  expensesValue.textContent = sumExpenses;
  appData.sumExpenses = sumExpenses;
});

function checkChangeExpenses() {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let inputOne = expensesItem[i],
      inputTwo = expensesItem[++i],
      valueOne = inputOne.value,
      valueTwo = +inputTwo.value,
      checkOne = valueOne.length > 0,
      checkTwo = valueTwo > 0 && !isNaN(valueTwo);

    if (checkOne && checkTwo) {
      expensesItemBtn.classList.remove("button_disabled");
      inputOne.classList.remove('input_error');
      inputTwo.classList.remove('input_error');
      inputOne.classList.add('input_done');
      inputTwo.classList.add('input_done');
      appData.expenses[valueOne] = valueTwo;
      sum += valueTwo;
    } else {
      inputOne.classList.remove('input_done');
      inputTwo.classList.remove('input_done');

      inputOne.classList.add('input_error');
      inputTwo.classList.add('input_error');
    }
  }
  return sum;
};

expensesItem.forEach(function (item) {
  item.addEventListener('input', checkChangeExpenses);
});

function checkChangeOptionalExpenses(isAdd) {
  if (isAdd) {
    optionalExpensesValue.textContent = '';
  }
  optionalExpensesItem.forEach(function (item, i) {
    if (item.value.length > 0) {
      optionalExpensesBtn.classList.remove("button_disabled");
      item.classList.remove('input_error');
      item.classList.add('input_done');
      if (isAdd) {
        appData.optionalExpenses[i] = item.value;
        optionalExpensesValue.textContent += item.value + ' ';
      }
    } else {
      item.classList.remove('input_done');
      item.classList.add('input_error');
    }
  });
}

optionalExpensesItem.forEach(function (item) {
  item.addEventListener('input', function () {
    checkChangeOptionalExpenses(false);
  });
});

optionalExpensesBtn.addEventListener('click', function () {
  checkChangeOptionalExpenses(true);
});

countBudgetBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - appData.sumExpenses) / numberDay).toFixed();

    if (appData.moneyPerDay > 0) {
      dayBudgetValue.textContent = appData.moneyPerDay;
    } else {
      dayBudgetValue.textContent = "Бюджета не хватает";
    }


    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    dayBudgetValue.textContent = "Произошла ошибка";
  }
});

chooseIncome.addEventListener('input', function () {
  let items = chooseIncome.value;

  appData.income = items.split(', ');

  appData.income.sort();

  incomeValue.textContent = appData.income;
});

chooseSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }

  console.log(sum, percent);
});

choosePercent.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value,
      percent = +choosePercent.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let numberDay = 30,
  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    sumExpenses: 0,
    optionalExpenses: {},
    income: 0,
    savings: false
  };