/* Задача

Найдите сумму нечетных чисел в массиве после возведения в куб исходных целых чисел. 
Функция должна возвращать undefined, если какое-либо из значений не является числом.

*/

function cubeOdd(arr) {
  if (arr.find((el) => typeof el === "string")) {
    console.log(undefined);
    return undefined;
  } else {
    arr = arr.map((el) => Math.pow(el, 3));
    arr = arr.filter((el) => el % 2 !== 0);
    let sum;
    if (arr.length > 0) {
      sum = arr.reduce((currentSum, currentNum) => {
        return currentSum + currentNum;
      });
    }
    console.log(sum);
    return sum;
  }
}

cubeOdd([2, 2]);
