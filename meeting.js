/* Задача

Джон пригласил несколько друзей. Вот его список:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Не могли бы вы создать программу, которая

переводит эту строку в верхний регистр
сортирует их в алфавитном порядке по фамилии.
Если фамилии совпадают, отсортируйте их по имени. Фамилия и имя гостя указываются в результатах в скобках через запятую.

Таким образом, результатом работы функции meeting(s) будет:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
Может случиться так, что в двух разных семьях с одинаковой фамилией у двух человек будет одинаковое имя.

Примечания
Другие примеры вы можете увидеть в разделе «Образцы тестов».

*/

function meeting(s) {
  let arr = s.split(";");
  arr = arr.map((el) => el.toUpperCase().split(":").reverse());
  console.log("arr - 111", arr);
  arr = arr.sort();
  arr = arr.map((el) => "(" + el.join(", ") + ")");
  console.log(arr.join(""));
  return arr.join("");
}

meeting(
  "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
);
