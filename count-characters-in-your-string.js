/* Задача

Основная идея состоит в том, чтобы подсчитать все встречающиеся в строке символы. 
Если у вас есть строка, например, aba, то результатом должно быть {'a': 2, 'b': 1}.

Что, если строка пустая? Тогда результатом должен быть пустой объектный литерал, {}.

*/

function count(string) {
  let countSymbols = {};
  let arr = string.split("");

  for (el in arr) {
    if (countSymbols[arr[el]]) {
      countSymbols[arr[el]] = countSymbols[arr[el]] + 1;
    } else {
      countSymbols[arr[el]] = 1;
    }
  }
  console.log(countSymbols);
  return countSymbols;
}

count("ABC");
