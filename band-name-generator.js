/* Задача

Моя подруга хочет, чтобы у её группы было новое название. Ей нравятся группы, которые используют формулу: 
«The» + существительное с заглавной буквы, например:

"dolphin" -> "The Dolphin"

Однако, когда существительное НАЧИНАЕТСЯ и ЗАКАНЧИВАЕТСЯ одной и той же буквой, она любит 
повторять это существительное дважды и соединять их вместе, используя первую и последнюю буквы, 
в одно слово (без «The» в начале), например:

"alaska" -> "Alaskalaska"

Напишите функцию, которая принимает существительное в виде строки и возвращает предпочтительное 
название группы в виде строки.

*/

function bandNameGenerator(str) {
  let arr = str.split("");
  if (arr[0] === arr[arr.length - 1]) {
    arr = arr.map((el, index) => (index === 0 ? el.toUpperCase() : el));
    let addArr = arr.filter((el, index) => index !== 0);
    arr = arr.concat(addArr);
    console.log(arr);
  } else {
    arr = arr.map((el, index) => (index === 0 ? el.toUpperCase() : el));
    arr.unshift("The ");
  }
  console.log(arr.join(""));
  return arr.join("");
}

bandNameGenerator("tart");
