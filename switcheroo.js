/* Задача

Дана строка, состоящая из букв a, b и/или c. Поменяйте местами буквы a и b 
(замените a на b и наоборот). Букву c оставьте без изменений.

Пример:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

function switcheroo(x) {
  let arr = x.split("");
  arr = arr.map((el) => {
    if (el === "a") return (el = "b");
    if (el === "b") return (el = "a");
    return el;
  });
  console.log(arr.join(""));
  return arr.join("");
}

switcheroo("abc");
