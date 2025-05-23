/* Задача

Разгром предложения
Напишите функцию, которая принимает массив слов, объединяет их в предложение и возвращает это предложение. 
Вы можете не обращать внимания на необходимость очистки слов или добавления знаков препинания, 
но вы должны добавлять пробелы между словами. Будьте внимательны, в начале или в конце предложения 
не должно быть пробелов!

Пример
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
words = ['hello', 'world', 'this', 'is', 'great']
smash(words) # returns "hello world this is great"
Предположения
Вы можете предположить, что вам даны только слова.
Вы не можете предположить размер массива.
Вы можете предположить, что вы действительно получаете массив.
Что мы Тестируем
Мы тестируем базовые циклы и операции со строками. Это для новичков, которые только изучают циклы 
и операции со строками.

Отказ от ответственности
Это для новичков, поэтому мы хотим протестировать базовые циклы и манипуляции со строками. 
Опытные пользователи должны легко справиться с этим в одну строку.

*/

function smash(words) {
  console.log(words.join(" "));
  return words.join(" ");
}

smash(["hello", "world"]);
