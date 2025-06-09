/* Задача

Напишите Номер в Развернутом виде
Вам будет дано число, и вам нужно будет вернуть его в виде строки в расширенной форме. Например:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
ПРИМЕЧАНИЕ: все числа будут целыми и больше 0.

*/

function expandedForm(num) {
  let arr = num.toString().split("").reverse();
  arr = arr.map((el, index) => {
    return index !== 0 && el !== "0" ? (el = el + "0".repeat(index)) : el;
  });
  arr = arr.filter((el) => el !== "0");
  console.log(arr.reverse().join(" + "));
  return arr.reverse().join(" + ");
}

expandedForm(70304);
