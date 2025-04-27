/* Задача
Инструкции
Напишите функцию, которая принимает в качестве аргумента одну непустую строку, состоящую только из строчных 
и прописных букв ASCII (word), и возвращает упорядоченный список, содержащий индексы всех прописных (заглавных) букв в строке.

Пример (Ввод -> Вывод)
"CodEWaRs" --> [0,3,4,6]
*/

var capitals = function (word) {
  let arr = word.split("");
  let indexes = [];
  arr.forEach((el, index) => {
    if (el === el.toUpperCase()) {
      indexes.push(index);
    }
  });
  console.log(indexes);
  return indexes;
};

capitals("CodEWaRs");
