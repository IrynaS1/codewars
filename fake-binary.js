/* Задача

Данную строку цифр необходимо заменить на '0' для всех цифр меньше 5 и на '1' для всех цифр от 5 и выше. 
Вернуть полученную строку.

Примечание: входные данные никогда не будут пустой строкой

*/

function fakeBin(x) {
  let arr = x.split("");
  arr = arr.map((el) => {
    return Number(el) >= 5 ? (el = "1") : (el = "0");
  });
  console.log(arr.join(""));
  return arr.join("");
}

fakeBin("45385593107843568");
