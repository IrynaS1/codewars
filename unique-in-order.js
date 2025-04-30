/* Задача

Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность 
и возвращает список элементов без повторяющихся значений, сохраняя исходный порядок элементов.

Например:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder = function (iterable) {
  let result;
  const filteredArr = (arr) => {
    arr = arr.filter((el, index) => el !== arr[index + 1]);
    result = arr;
  };
  if (typeof iterable === "string") {
    let arr = iterable.split("");
    filteredArr(arr);
  } else {
    filteredArr(iterable);
  }
  console.log(result);
  return result;
};

uniqueInOrder([1, 2, 2, 3, 3]);
