/* Задача

Дополните функцию вычисления суммы квадратов так, чтобы она возводила 
в квадрат каждое переданное ей число, а затем суммировала результаты.

Например, для [1, 2, 2] должно быть возвращено 9, потому что 
1**2 + 2**2 + 2**2 =9
*/

function squareSum(numbers) {
  if (numbers.length > 0) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      console.log(sum);
      sum = sum + numbers[i] ** 2;
    }
    console.log(sum);
    return sum;
  } else {
    console.log(0);
    return 0;
  }
}

squareSum([4, 17, 7]);
