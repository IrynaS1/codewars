/* Задача

Создайте метод, который принимает на вход имя, город и штат, чтобы поприветствовать человека. 
Обратите внимание, что name будет массивом, состоящим из одного или нескольких значений, 
которые нужно соединить пробелами, а длина массива name в тестовых случаях будет варьироваться.

Пример:

['John', 'Smith'], 'Phoenix', 'Arizona'
В этом примере будет возвращена строка Hello, John Smith! Welcome to Phoenix, Arizona!

*/

function sayHello(name, city, state) {
  let fullName = "";
  name.forEach((el) => (fullName = fullName + " " + el));
  console.log(`Hello,${fullName}! Welcome to ${city}, ${state}!`);
  return `Hello,${fullName}! Welcome to ${city}, ${state}!`;
}

sayHello(["John", "Smith"], "Phoenix", "Arizona");
