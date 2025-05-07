/* Задача

В этой задаче вам нужно заменить каждую букву в строке на её порядковый номер в алфавите.

Если в тексте есть что-то, что не является буквой, проигнорируйте это и не возвращайтесь к этому.

"a" = 1, "b" = 2 и т.д.

Пример
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

*/

function alphabetPosition(text) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let arr = text.split("");
  arr = arr.filter((el) => alphabet.includes(el.toLowerCase()));
  let numsArr = arr.map((el) => {
    el = el.toLowerCase();
    return (el = alphabet.indexOf(el) + 1);
  });

  console.log(numsArr.join(" "));
  return numsArr.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.");
