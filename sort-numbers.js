/* Задача

Доработайте решение так, чтобы оно сортировало переданный массив чисел. 
Если функция получает пустой массив или значение null/nil, она должна возвращать пустой массив.

Например:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

*/

function solution(nums) {
  if (nums === null || nums.length === 0) {
    nums = [];
  } else {
    nums = nums.sort((a, b) => {
      return a - b;
    });
  }
  console.log(nums);
  return nums;
}

solution([]);
