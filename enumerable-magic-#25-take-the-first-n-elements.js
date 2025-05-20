/* Задача

Создайте функцию, которая принимает список/массив и число n и возвращает список/массив 
первых n элементов из списка/массива.

Если вам нужна помощь, вот ссылка:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

function take(arr, n) {
  console.log(arr.filter((el, index) => index < n));
  return arr.filter((el, index) => index < n);
}

take([0, 1, 2, 3, 5, 8, 13], 3);
