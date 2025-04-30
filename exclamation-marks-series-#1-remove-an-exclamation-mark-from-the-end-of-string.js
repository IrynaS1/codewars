/* Задача

Описание:
Удалите восклицательный знак в конце строки. Для начинающих можно предположить, 
что входные данные всегда представляют собой строку, и не нужно их проверять.

Примеры
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/

function remove(string) {
  if (string[string.length - 1] === "!") {
    let newString = string.slice(0, string.length - 1);
    string = newString;
  }
  console.log(string);
  return string;
}

remove("Hi!!!");
