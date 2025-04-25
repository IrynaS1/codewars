/* Задача

Поздоровайся!

Напишите функцию для приветствия человека. Функция будет принимать имя в 
качестве входных данных и приветствовать человека, говоря «Здравствуйте». 
Возвращает значение null/nil/None, если входные данные представляют собой пустую строку или значение null/nil/None.

Пример:

greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null

*/

function greet(name) {
  if (name === null || name === "") {
    console.log(null);
    return null;
  } else {
    console.log(`hello ${name}!`);
    return `hello ${name}!`;
  }
}

greet("Niks");
