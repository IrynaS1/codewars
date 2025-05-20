/* Задача

Зашифруй это!

Вы хотите создавать секретные сообщения, которые можно расшифровать с помощью ката «Расшифруй это!». Вот условия:

Ваше сообщение представляет собой строку, содержащую слова, разделенные пробелами.
Вам необходимо зашифровать каждое слово в сообщении, используя следующие правила:
Первая буква должна быть преобразована в ее ASCII-код.
Вторая буква должна быть заменена последней буквой
Всё просто: во вводе нет специальных символов.
Примеры:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/

var encryptThis = function (text) {
  let arr = text.split(" ");
  arr = arr.map((word) => {
    let newArr = [];
    let lettersArr = word.split("");
    lettersArr.forEach((el, index) => {
      if (index === 0) {
        newArr.push(el.charCodeAt());
      } else if (index === 1) {
        newArr.push(lettersArr[lettersArr.length - 1]);
      } else if (index === lettersArr.length - 1) {
        newArr.push(lettersArr[1]);
      } else {
        newArr.push(el);
      }
    });

    lettersArr = newArr;
    return lettersArr.join("");
  });
  console.log(arr.join(" "));
  return arr.join(" ");
};

encryptThis("A wise old owl lived in an oak");
