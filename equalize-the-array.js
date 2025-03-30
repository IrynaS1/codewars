/* Задача

Никакого описания!!!

Входные данные :: [10,20,25,0]

Вывод: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!


*/

function equalize(array) {
  let newArray = array.map((el) => {
    return el - array[0];
  });

  newArray = newArray.map((el) => {
    return el >= 0 ? `+${el}` : `${el}`;
  });
  console.log(newArray);
  return newArray;
}

equalize([20, 30, 35, 10]);
