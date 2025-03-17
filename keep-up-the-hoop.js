/* Задача

Алекс только что получил новый хула-хуп, он ему нравится, но он расстроен, 
потому что его младший брат лучше него.

Напишите программу, в которой Алекс сможет ввести (n) количество оборотов обруча, 
и она вернёт ему ободряющее сообщение:

Если Алекс набирает 10 или более очков, верните строку "Great, now move on to tricks".
Если он не попадет в 10 колец, верните строку "Keep at it until you get it".

*/

function hoopCount(n) {
  console.log(
    n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
  );
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

hoopCount(11);
