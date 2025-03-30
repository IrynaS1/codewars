/* Задача

Напишите функцию, которая принимает строку и возвращает ту же строку, в 
которой все чётные индексы символов в каждом слове будут в верхнем регистре, 
а все нечётные индексы символов в каждом слове — в нижнем. Только что описанная 
индексация начинается с нуля, поэтому нулевой индекс является чётным, поэтому 
этот символ должен быть в верхнем регистре, и вам нужно начинать с нуля для 
каждого слова.

Переданная строка будет состоять только из буквенных символов и пробелов(' '). 
Пробелы будут присутствовать только в том случае, если есть несколько слов. 
Слова будут разделены одним пробелом(' ').

Примеры:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"

*/

function toWeirdCase(string) {
  let array = string.split(" ");
  array = array.map((word) => {
    let arrayLetters = word.split("");
    arrayLetters = arrayLetters.map((el, index) => {
      return index % 2 === 0 ? el.toUpperCase() : el.toLowerCase();
    });
    return arrayLetters.join("");
  });

  console.log(array.join(" "));
  return array.join(" ");
}

toWeirdCase("UPPER CASE");
toWeirdCase("unique");
