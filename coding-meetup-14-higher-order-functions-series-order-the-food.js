/* Задача

Вам будет предоставлен массив объектов, представляющих данные о разработчиках, 
которые зарегистрировались для участия в следующем мероприятии по программированию, которое вы организуете.

Ваша задача — вернуть объект, который содержит количество вариантов блюд, выбранных разработчиками в форме регистрации на встречу..

Например, учитывая следующий входной массив:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

Ваша функция должна возвращать следующий объект (порядок свойств не имеет значения):

{ vegetarian: 2, standard: 1, vegan: 1 }

Примечания:

Порядок подсчета блюд в объекте не имеет значения.
Значение count должно быть допустимым числом.
Входной массив всегда будет корректным и отформатированным, как в примере выше.
существует 5 возможных вариантов меню, и строки, представляющие выбранный вариант меню, 
всегда будут форматироваться одинаково, следующим образом: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.
*/

function orderFood(list) {
  let count = {};
  const meals = list.map((person) => person.meal);
  for (elem in meals) {
    count[meals[elem]] === undefined
      ? (count[meals[elem]] = 1)
      : count[meals[elem]]++;
  }
  console.log(count);
  return count;
}

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

orderFood(list1);
