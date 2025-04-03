/* Задача

Это самая ожидаемая игра учебного года — Гриффиндор против Слизерина! 
Напишите функцию, которая возвращает команду-победительницу.

Вам будут предоставлены два массива с двумя значениями.

Первое указанное значение — это количество очков, набранных ловцами команды, 
а второе — строка со значением «да» или «нет», если команда поймала золотого снитча!

Команда, поймавшая «снитч», приносит своей команде дополнительные 150 очков, 
но не всегда выигрывает игру.

gameWinners([150, 'yes'],[200, 'no']) //'Gryffindor wins!'
gameWinners([400, 'no'],[350, 'yes']) //'Slytherin wins!'
Если счёт ничейный, скажите: «Ничья!»

** Игра заканчивается только тогда, когда кто-то поймает золотого снитча, 
поэтому в одном из массивов всегда будет «да» или «нет». Очки, набранные охотниками, могут быть любым положительным целым числом.

*/

function gameWinners(gryffindor, slytherin) {
  let sum = (arr) => {
    if (arr[1] === "yes") {
      return arr[0] + 150;
    } else {
      return arr[0];
    }
  };
  let isGryffindorWins = sum(gryffindor);
  let isSlytherinWins = sum(slytherin);

  if (isGryffindorWins > isSlytherinWins) {
    console.log("Gryffindor wins!");
    return "Gryffindor wins!";
  } else if (isGryffindorWins < isSlytherinWins) {
    console.log("Slytherin wins!");
    return "Slytherin wins!";
  } else {
    console.log("It's a draw!");
    return "It's a draw!";
  }
}

gameWinners([100, "yes"], [100, "no"]);
