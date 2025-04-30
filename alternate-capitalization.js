/* Задача

Дана строка. Сделайте заглавными буквы, которые занимают чётные индексы, и буквы, 
которые занимают нечётные индексы, по отдельности, и верните результат, как показано ниже. 
Индекс 0 будет считаться чётным.

Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. Смотрите тестовые примеры для получения дополнительных примеров.

Входными данными будут строки в нижнем регистре без пробелов.

*/

function capitalize(s) {
  let resultArr = [];
  let arr = s.split("");
  let string = "";
  arr.forEach((el, index) => {
    index % 2 === 0
      ? (string = string + el.toUpperCase())
      : (string = string + el);
  });
  resultArr.push(string);
  let stringTwo = "";
  arr.forEach((el, index) => {
    index % 2 !== 0
      ? (stringTwo = stringTwo + el.toUpperCase())
      : (stringTwo = stringTwo + el);
  });
  resultArr.push(stringTwo);
  console.log(resultArr);
  return resultArr;
}

capitalize("codewars");
