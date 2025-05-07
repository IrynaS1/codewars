/* Задача

Найдите сумму всех кратных n ниже m

Имейте в виду
n и m являются натуральными числами (целыми положительными числами)
m исключается из числа кратных
Примеры
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/

function sumMul(n, m) {
  if (n > 0 && m > 0) {
    let arr = [];
    for (let i = n; i < m; i++) {
      if (i % n === 0) {
        arr.push(i);
      }
    }
    const sum = arr.reduce((s, n) => {
      return s + n;
    });
    console.log(sum);
    return sum;
  } else {
    console.log("INVALID");
    return "INVALID";
  }
}

sumMul(2, 9);
