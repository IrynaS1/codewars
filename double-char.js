/* Задача

Вам дана строка, из которой нужно вернуть строку, в которой каждый символ 
(с учётом регистра) повторяется один раз.

Примеры (Ввод -> Вывод):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

*/

function doubleChar(str) {
  let arr = str.split("");
  arr = arr.map((el) => (el = el + el));
  console.log(arr.join(""));
  return arr.join("");
}

doubleChar("abcd");
