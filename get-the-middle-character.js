/* Задача
Вам будет дана непустая строка. Ваша задача — вернуть средний символ (символы) строки.

Если длина строки нечётная, верните средний символ.
Если длина строки чётная, верните два средних символа.
Примеры:
"test" --> "es"
"testing" --> "t"
"middle" --> "dd"
"A" --> "A"
*/

function getMiddle(s) {
  let arr = s.split("");
  let sym = "";
  let index = Math.floor(arr.length / 2);
  if (arr.length % 2 !== 0) {
    sym = arr[index];
    console.log(sym);
    return sym;
  } else {
    let indexes = [index - 1, index];
    sym = arr[indexes[0]] + arr[indexes[1]];
    console.log(sym);
    return sym;
  }
}

getMiddle("middle");
