/* Задача

Напишите функцию, которая принимает в качестве аргумента список строк и возвращает отфильтрованный 
список, содержащий те же элементы, но без «гусей».

Гуси — это любые строки из следующего массива, который предварительно заполнен в вашем решении:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
Например, если бы этот массив был передан в качестве аргумента:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Ваша функция вернет следующий массив:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, 
переданном вашей функции, но без «гусей». Обратите внимание, что все строки будут в том
 же регистре, что и исходные, а некоторые элементы могут повторяться.
*/

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  birds = birds.filter((el) => !geese.includes(el));
  console.log(birds);
  return birds;
}

gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);
