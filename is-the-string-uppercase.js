/* Задача

Строка написана в верхнем регистре?
Задача
Создайте метод, чтобы проверить, ВСЕ ЛИ строки ЗАГЛАВНЫЕ.

Примеры (ввод -> вывод)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
В этой задаче строка считается написанной заглавными буквами, 
если она не содержит строчных букв, поэтому любая строка, не содержащая букв, считается написанной заглавными буквами.

*/

String.prototype.isUpperCase = function () {
  let arr = this.split("");
  let count = 0;
  arr.forEach((el) => {
    el.toUpperCase() === el ? (count = count + 1) : count;
  });
  console.log(count === arr.length ? true : false);
  return count === arr.length ? true : false;
};

"HELLO WORLD".isUpperCase();
