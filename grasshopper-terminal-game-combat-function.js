/* Задача

Создайте боевую функцию, которая учитывает текущее здоровье игрока и полученный урон и возвращает 
новое значение здоровья игрока. Здоровье не может быть меньше 0.

*/

function combat(health, damage) {
  let newHealth = health - damage;
  console.log(newHealth < 0 ? 0 : newHealth);
  return newHealth < 0 ? 0 : newHealth;
}

combat(92, 8);
