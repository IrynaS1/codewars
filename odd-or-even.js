/* Задача

Задача:
Дан список целых чисел. Определите, является ли сумма его элементов нечётной или чётной.

Дайте свой ответ в виде строки , соответствующей "odd" или "even".

Если входной массив пуст, считайте его: [0] (массивом с нулём).

Примеры:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Получайте удовольствие!

*/

function oddOrEven(array) {
  if (array.length === 0) {
    console.log("even");
    return "even";
  } else {
    const sum = array.reduce((currentSum, currentValue) => {
      return currentSum + currentValue;
    });
    console.log(sum % 2 === 0 ? "even" : "odd");
    return sum % 2 === 0 ? "even" : "odd";
  }
}

oddOrEven([0, 1, 5]);
