/* Задача

Вы, вероятно, знакомы с системой «лайков» на Facebook и других страницах. 
Люди могут «лайкать» посты в блогах, фотографии или другие материалы. Мы хотим создать текст, 
который будет отображаться рядом с таким материалом.

Реализуйте функцию, которая принимает массив, содержащий имена людей, которым нравится товар. 
Она должна возвращать текст для отображения, как показано в примерах:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Примечание: для 4 и более имён число в "and 2 others" просто увеличивается.



*/

function likes(names) {
  const namesLength = names.length;
  switch (namesLength) {
    case 0:
      console.log("no one likes this");
      return "no one likes this";
    case 1:
      console.log(`${names[0]} likes this`);
      return `${names[0]} likes this`;
    case 2:
      console.log(`${names[0]} and ${names[1]} like this`);
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      console.log(
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      );
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

likes(["Alex", "Jacob", "Mark", "Max"]);
