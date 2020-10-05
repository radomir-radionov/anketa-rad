const init = () => {
  const surname = getValue("Ваша фамилия?");
  const name = getValue("Ваше имя?");
  const patronymic = getValue("Ваше отчество?");
  const age = getValue("Ваш возраст?", true);
  const gen = getGen("Ваш пол - мужской?");
  const pension = getPension(age, gen);

  print(surname, name, patronymic, age, gen, pension);
};

const print = (surname, name, patronymic, age, getGen, pension) => {
  alert(
    `Ваше ФИО: ${surname}, ${name}, ${patronymic}
  Ваш возраст в годах: ${age}
  Ваш возраст в днях: ${age * 365}
  Через 5 лет вам будет: ${+age + 5}
  Ваш пол: ${getGen}
  Вы на пенсии: ${pension}`
  );
};

const getValue = (text, number) => {
  let value = prompt(text);

  if (number) {
    while (!Number(value)) {
      value = prompt(text);
    }
    return value;
  } else {
    while (value === "") {
      value = prompt(text);
    }
    return value;
  }
};

const getGen = (text) => {
  let valueGen = confirm(text);
  return valueGen ? "Мужской" : "Женский";
};

const getPension = (age, valueGen) => {
  if ((age >= 65 && valueGen) || (age >= 55 && !valueGen)) {
    return "Да";
  } else {
    return "Нет";
  }
};

init();
