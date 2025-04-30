/* Задача

На этот раз никакой истории, никакой теории. 
Приведённые ниже примеры показывают, как написать функцию accum:

Примеры:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
Параметр accum — это строка, которая содержит только буквы a..z и A..Z.

*/

function accum(s) {
  let arr = s.split("");
  arr = arr.map((el, index) => {
    let word = el.toLowerCase().repeat(index + 1);
    return (word = el.toUpperCase() + word.substring(1));
  });
  console.log(arr.join("-"));
  return arr.join("-");
}

accum("ZpglnRxqenU");
