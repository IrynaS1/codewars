/* Задача

Завершите функцию, которая возвращает день недели в соответствии с введенным номером:

1 ВОЗВРАТ "Sunday"
2 ВОЗВРАТ "Monday"
3 ВОЗВРАТ "Tuesday"
4 ВОЗВРАТ "Wednesday"
5 ВОЗВРАТ "Thursday"
6 ВОЗВРАТ "Friday"
7 ВОЗВРАТ "Saturday"
В противном случае возвращается "Wrong, please enter a number between 1 and 7"

*/

function whatday(num) {
  switch (num) {
    case 1:
      console.log("Sunday");
      return "Sunday";
    case 2:
      console.log("Monday");
      return "Monday";
    case 3:
      console.log("Tuesday");
      return "Tuesday";
    case 4:
      console.log("Wednesday");
      return "Wednesday";
    case 5:
      console.log("Thursday");
      return "Thursday";
    case 6:
      console.log("Friday");
      return "Friday";
    case 7:
      console.log("Saturday");
      return "Saturday";
    default:
      console.log("Wrong, please enter a number between 1 and 7");
      return "Wrong, please enter a number between 1 and 7";
  }
}

whatday(20);
