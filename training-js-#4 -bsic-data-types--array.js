/* Задача

В JavaScript массив является одним из базовых типов данных. Чтобы создать пустой массив, 
можно использовать let arr=new Array() или let arr=[]

У массива есть атрибут: length, если есть массив с именем arr, используйте arr.length для 
определения количества элементов в массиве.

У каждого элемента в массиве есть index, используйте arr[index] для получения значения элемента.

index всегда начинается с 0, поэтому первый элемент массива — arr[0], а последний элемент массива — arr[arr.length-1].

Если мы хотим добавить новые элементы в массив, можно использовать метод массива: push(). 
Он может добавить элемент в конец массива. Если мы хотим удалить последний элемент массива, 
можно использовать метод массива: pop(). Например:

let arr=[1,2,3];     //define an array arr contains elements 1 2 3
arr.push(4);         //add element 4 to arr
console.log(arr)     //[1,2,3,4]
arr.pop();           //remove the last element from arr
console.log(arr)     //[1,2,3]
Задача
Я написал пять функций. Каждая функция получает параметр arr, который является массивом. 
Дополните функции, используя arr внутри их тел.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
Когда вы закончите работу, нажмите «Запустить тесты», чтобы проверить, правильно ли работает ваш код.

В конце нажмите «Отправить», чтобы отправить свой код и пройти это задание.

*/

function getLength(arr) {
  console.log(arr.length);
  return arr.length;
}

function getFirst(arr) {
  console.log(arr[0]);
  return arr[0];
}

function getLast(arr) {
  console.log(arr[arr.length - 1]);
  return arr[arr.length - 1];
}

function pushElement(arr) {
  var el = 1;
  arr.push(el);
  console.log(arr);
  return arr;
}

function popElement(arr) {
  arr.pop();
  console.log(arr);
  return arr;
}

getLength([1, 2, 3]);
getFirst([1, 2, 3]);
getLast([1, 2, 3]);
pushElement([1, 2, 3]);
popElement([1, 2, 3]);
