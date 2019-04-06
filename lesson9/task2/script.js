let age = document.getElementById('age');
let user = {
  name: 'Иван',
  surname: 'Иванов'
}

function showUser(surname, name) {
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.call(age, user.name, user.surname);