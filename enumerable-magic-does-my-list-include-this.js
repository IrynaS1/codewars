/* Задача

Создайте метод, который принимает список и элемент и возвращает true если элемент принадлежит списку, иначе false.

*/

function include(arr, item) {
  console.log(arr.includes(item) ? true : false);
  return arr.includes(item) ? true : false;
}

include([1, 2, 3, 4], 3);
