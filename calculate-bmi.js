/* Задача

Напишите функцию bmi, которая вычисляет индекс массы тела (ИМТ = вес / рост2).

если ИМТ меньше или равно 18,5, верните сообщение "Underweight"

если ИМТ меньше или равно 25,0, верните "Normal"

если ИМТ меньше или равно 30,0, верните сообщение "Overweight"

если ИМТ больше 30, верните  "Obese"

*/

function bmi(weight, height) {
  let bmIndex = weight / height ** 2;

  if (bmIndex <= 18.5) {
    console.log("Underweight");
    return "Underweight";
  } else if (bmIndex <= 25.0) {
    console.log("Normal");
    return "Normal";
  } else if (bmIndex <= 30.0) {
    console.log("Overweight");
    return "Overweight";
  } else if (bmIndex > 30.0) {
    console.log("Obese");
    return "Obese";
  }
}

bmi(50, 1.8);
