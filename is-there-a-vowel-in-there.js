/* Задача

Дан массив чисел. Проверьте, являются ли какие-либо из этих чисел кодами символов для гласных в нижнем регистре (a, e, i, o, u).

Если это так, измените значение массива на строку с этой гласной.

input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Верните результирующий массив.

*/

function isVow(a) {
  const vowelsAndCode = [97, "a", 101, "e", 105, "i", 111, "o", 117, "u"];

  a = a.map((el) => {
    let newEl;
    vowelsAndCode.forEach((v, index) => {
      if (el === v) {
        return (newEl = index + 1);
      }
    });
    console.log(newEl);

    return vowelsAndCode.includes(el) ? vowelsAndCode[newEl] : el;
  });
  console.log(a);
  return a;
}

isVow([
  118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120,
  106,
]);
