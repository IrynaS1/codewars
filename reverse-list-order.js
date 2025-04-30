/* Задача

В этом задании вы создадите функцию, которая принимает список и возвращает список в обратном порядке.

Примеры (Ввод -> Вывод)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

*/

function reverseList(list) {
  let newList = list.map((el, index) => {
    return (el = list[list.length - (index + 1)]);
  });
  console.log(newList);
  return newList;
}

reverseList([1, 2, 3, 4]);
