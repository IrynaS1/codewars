/* Задача

Определите, является ли неотрицательное целое число красным или нет.

263 это красочное число, потому что [2, 6, 3, 2*6, 6*3, 2*6*3] все они разные; тогда как
236 не является красочным, потому что [2, 3, 6, 2*3, 3*6, 2*3*6] имеет 6 два раза.

Итак, возьмите все последовательные наборы цифр, перемножьте их и убедитесь, что все произведения разные.

Примеры
263  -->  true
236  -->  false

*/

function colourful(number) {
  let arr = number.toString().split("");
  arr = arr.map((el) => Number(el));
  let newArr = [];
  if (arr.length === 1) {
    console.log(true);
    return true;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      newArr.push(arr[i] * arr[i + 1]);
    }
    arr = arr.concat(newArr);
    const multiply = arr.reduce((currentMultiply, currentNum) => {
      return currentMultiply * currentNum;
    });
    arr.push(multiply);
    let unique = new Set([...arr]);
    let uniqueArrNums = [...unique];
    console.log(arr.length === uniqueArrNums.length ? true : false);
    return arr.length === uniqueArrNums.length ? true : false;
  }
}

colourful(5);
