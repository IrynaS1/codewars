/* Задача

В этом задании ваша задача — вернуть два самых больших значения из списка. 
Если уникальных значений меньше двух, верните как можно больше.

Результат также должен быть упорядочен от наивысшего к наименьшему.

Примеры:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []



*/

function twoHighest(arr) {
  if (arr.length <= 0) {
    console.log(arr);
    return arr;
  } else {
    arr = [...new Set(arr)];
    arr.sort(function (a, b) {
      return b - a;
    });
    arr = arr.slice(0, 2);
  }
  console.log(arr);
  return arr;
}

twoHighest([15, 20, 20, 17, 25]);
