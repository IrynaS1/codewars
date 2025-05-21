/* Задача

В этой простой кате ваша задача — создать функцию, которая преобразует строку 
в мексиканскую волну. Вам будет передана строка, и вы должны вернуть массив строк, 
в котором заглавная буква обозначает стоящего человека.

Правила
1. Вводимая строка всегда будет состоять из строчных букв и пробелов, но может 
быть пустой, в этом случае вы должны вернуть пустой массив. 2. Если символ в строке 
является пробелом, пропустите его, как если бы это было пустое место

Примеры
"hello" => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
" s p a c e s " => [ " S p a c e s ", " s P a c e s ", " s p A c e s ", 
" s p a C e s ", " s p a c E s ", " s p a c e S "]
Удачи и наслаждайтесь!

*/

function wave(str) {
  let arr = [];
  let arrLetters = str.split("");
  arrLetters.forEach((el, index, arrLetters) => {
    if (el !== " ") {
      for (let i = 0; i < arrLetters.length; i++) {
        i === index
          ? (arrLetters[i] = arrLetters[i].toUpperCase())
          : (arrLetters[i] = arrLetters[i].toLowerCase());
      }
      return arr.push(arrLetters.join(""));
    }
  });
  console.log("arr", arr);
  return arr;
}

wave("two words");
