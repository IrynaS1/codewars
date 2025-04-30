/* Задача

Напишите функцию, которая возвращает строку, в которой имя меняется местами с фамилией.

Пример (Ввод -> Вывод)

"john McClane" --> "McClane john"

*/

function nameShuffler(str) {
  let arr = str.split(" ");
  let newArr = [];
  newArr.push(arr[1]);
  newArr.push(arr[0]);
  console.log(newArr.join(" "));
  return newArr.join(" ");
}

nameShuffler("john McClane");
