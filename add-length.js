/* Задача

Что, если нам нужно добавить длину слов, разделённых пробелами, 
в конец того же слова и вернуть их в виде массива?

Пример (Ввод -> Вывод)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Ваша задача — написать функцию, которая принимает строку и 
возвращает массив/список с длиной каждого слова, добавленной к каждому элементу.

Примечание: Строка будет содержать хотя бы один элемент; слова 
всегда будут разделены пробелом.
*/

function addLength(str) {
  const arr = str.split(" ");
  const newArr = arr.map((item) => {
    const lengthOfWords = item.split("").length;
    item = `${item} ${lengthOfWords}`;
    return item;
  });
  console.log(newArr);
  return newArr;
}

addLength("apple ban");
