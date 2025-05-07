/* Задача

Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. 
If end is not the result of an integer number of steps, then don't 
add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

=======
Ваша задача — написать функцию, которая возвращает сумму последовательности целых чисел.

Последовательность определяется тремя неотрицательными значениями: начало, конец, шаг.

Если значение begin больше, чем end, ваша функция должна возвращать 0. Если 
end не является результатом целочисленного количества шагов, не добавляйте его к сумме. 
См. четвёртый пример ниже.

Примеры

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

*/

const sequenceSum = (begin, end, step) => {
  if (begin < end) {
    let arr = [];
    for (let i = begin; i <= end; i = i + step) {
      arr.push(i);
    }
    let sum = arr.reduce((currentSum, currentNum) => {
      return currentSum + currentNum;
    });
    console.log(sum);
    return sum;
  } else {
    console.log(0);
    return 0;
  }
};

sequenceSum(1, 5, 3);
