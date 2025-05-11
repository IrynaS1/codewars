/* Задача

Создайте функцию, которая принимает массив имён и возвращает массив, в котором первая 
буква каждого имени написана заглавной, а остальные — строчными.

Примеры
['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']

*/

function capMe(names) {
  names = names.map((el) => {
    el = el.split("");
    el = el.map((letter, index) => {
      return index === 0 ? letter.toUpperCase() : letter.toLowerCase();
    });
    return el.join("");
  });
  console.log(names);
  return names;
}

capMe(["RALPH", "GEORGIA", "CHRISTINA"]);
