/* Задача

Вам будет предоставлен массив объектов (ассоциативных массивов в PHP), представляющих данные о 
разработчиках, которые зарегистрировались для участия в следующем собрании программистов, 
которое вы организуете. Список упорядочен в соответствии с тем, кто зарегистрировался первым.

Ваша задача - вернуть одну из следующих строк:

< firstName here >, < country here > первого разработчика Python, который зарегистрировался; или
There will be no Python developers если ни один разработчик Python не зарегистрировался.
Например, учитывая следующий входной массив:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
ваша функция должна вернуть значение Victoria, Puerto Rico.

Примечания:

Входной массив всегда будет корректным и отформатированным, как в примере выше.


*/

function getFirstPython(list) {
  let firstPythonDeveloper = list.find((el) => el.language === "Python");

  console.log(
    firstPythonDeveloper !== undefined
      ? `${firstPythonDeveloper.firstName}, ${firstPythonDeveloper.country}`
      : "There will be no Python developers"
  );

  return firstPythonDeveloper !== undefined
    ? `${firstPythonDeveloper.firstName}, ${firstPythonDeveloper.country}`
    : "There will be no Python developers";
}

const list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

getFirstPython(list1);
