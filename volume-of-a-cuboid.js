/* Задача

Бобу нужен быстрый способ вычисления объёма прямоугольного параллелепипеда 
с тремя значениями: length, width и height параллелепипеда.

Напишите функцию, которая поможет Бобу с этим вычислением.

*/

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    console.log(length * width * height);
    return length * width * height;
  }
}

Kata.getVolumeOfCuboid(6, 2, 5);
