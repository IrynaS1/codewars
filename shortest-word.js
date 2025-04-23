/* Задача

Простое задание: дана строка из слов, нужно вернуть длину самого короткого слова (слов).

Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

*/

function findShort(s) {
  let arrayWords = s.split(" ");

  let arrayLengths = arrayWords.map((el) => {
    return el.length;
  });

  console.log(Math.min(...arrayLengths));
  return Math.min(...arrayLengths);
}

findShort("bitcoin take over the world maybe who knows perhaps");
