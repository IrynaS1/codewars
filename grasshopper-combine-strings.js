/* Задача

Функция объединения строк
Создайте функцию с именем combineNames/combine_names/CombineNames, 
которая принимает два параметра (имя и фамилию). Функция должна возвращать полное имя.

Пример:

При использовании "James" в качестве имени и "Stevens" в качестве фамилии должно 
возвращаться "James Stevens"

*/

function combineNames(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}

combineNames("James", "Stevens");
