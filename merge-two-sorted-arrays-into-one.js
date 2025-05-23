/* Задача

Вам даны два отсортированных массива, содержащих только целые числа. 
Эти массивы могут быть отсортированы как по возрастанию, так и по убыванию. 
Ваша задача — объединить их в один массив таким образом, чтобы:

Результирующий массив сортируется в порядке возрастания.

Все повторяющиеся значения удаляются, поэтому каждое целое число отображается только один раз.

Если оба входных массива пусты, верните пустой массив.

Проверка входных данных не требуется, так как оба массива гарантированно содержат ноль или более целых чисел.

Примеры (ввод -> вывод)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

*/

function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2);
  arr = arr.sort((a, b) => {
    return a - b;
  });
  arr = [...new Set(arr)];
  console.log(arr);
  return arr;
}

mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]);
