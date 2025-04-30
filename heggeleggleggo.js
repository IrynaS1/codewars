/* Задача

Разговор о яйцах.

Вставьте egg после каждой согласной. Если согласных нет, то и яиц не будет. 
Аргумент будет состоять из строки, содержащей только буквы и, возможно, пробелы.

Пример
hello => heggeleggleggo

eggs => egegggeggsegg

FUN KATA => FeggUNegg KeggATeggA

*/

function heggeleggleggo(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  let arr = word.split("");
  arr = arr.map((el) => {
    return !vowels.includes(el.toLowerCase()) && el !== " "
      ? (el = el + "egg")
      : el;
  });
  console.log(arr.join(""));
  return arr.join("");
}

heggeleggleggo("code here");
