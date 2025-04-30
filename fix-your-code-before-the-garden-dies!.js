/* Задача

У вас есть отмеченный наградами сад, и каждый день растениям требуется ровно 40 мм воды. 
Вы создали отличный фрагмент кода на JavaScript, чтобы рассчитать количество воды, необходимое 
вашим растениям, с учётом количества осадков, прогнозируемых на день. Ваш завистливый сосед 
взломал ваш компьютер и наполнил ваш код ошибками.

Ваша задача - отладить код до того, как ваши растения погибнут!

*/

function rainAmount(mm) {
  if (mm < 40) {
    console.log("You need to give your plant " + (40 - mm) + "mm of water");
    return "You need to give your plant " + (40 - mm) + "mm of water";
  } else {
    console.log("Your plant has had more than enough water for today!");
    return "Your plant has had more than enough water for today!";
  }
}

rainAmount(39);
