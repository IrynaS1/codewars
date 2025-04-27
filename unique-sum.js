/* Задача

Вам дан список целых чисел, и ваша задача — вычислить их сумму. 
Однако, если одно и то же целое число встречается в списке несколько раз,
вы можете учитывать его в сумме только один раз.

Например:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null
*/

function uniqueSum(lst) {
  let sum = 0;
  if (lst.length === 0) {
    console.log(null);
    return null;
  } else {
    lst = [...new Set(lst)];
    sum = lst.reduce((currentSum, currentNum) => {
      return currentSum + currentNum;
    });
  }
  console.log(sum);
  return sum;
}

uniqueSum([1, 3, 8, 1, 8]);
