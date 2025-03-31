/* Задача

Вам будет предоставлен массив объектов (ассоциативных массивов в PHP, таблиц в COBOL), 
представляющих данные о разработчиках, которые зарегистрировались для участия в следующем собрании программистов, которое вы организуете.

Ваша задача — вернуть массив, в котором у каждого объекта будет новое свойство «приветствие» со следующим строковым значением:

Hi < firstName here >, what do you like the most about < language here >?

Например, учитывая следующий входной массив:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
ваша функция должна возвращать следующий массив:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
Примечания:

Порядок свойств в объектах не имеет значения (кроме COBOL).
Входной массив всегда будет корректным и отформатированным, как в примере выше.


*/

function greetDevelopers(list) {
  list.map((el) => {
    return (el.greeting = `Hi ${el.firstName}, what do you like the most about ${el.language}?`);
  });

  console.log(list);
  return list;
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

greetDevelopers(list1);
