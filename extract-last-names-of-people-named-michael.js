/* Задача

Дан текст, например:

const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? 
I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, 
Michael Green AKA Star and Michael Wood?";

получите массив фамилий людей по имени Майкл. В результате должно получиться следующее:
["Jordan", "Johnson", "Green", "Wood"]

Примечания:

Имя всегда будет Майкл с заглавной буквы «М».
Между «Майклом» и фамилией всегда будет пробел.
Фамилия всегда будет состоять из одного слова, начинающегося с заглавной буквы и продолжающегося строчными буквами.
В тексте ввода всегда будет хотя бы один «Мишель» с правильной фамилией.

*/

function getMichaelLastName(inputText) {
  let arr = inputText.split(" ");
  let lastNamesArr = [];
  arr.forEach((el, index) => {
    if (
      el === "Michael" &&
      arr[index + 1][0] === arr[index + 1][0].toUpperCase()
    ) {
      let lastName = arr[index + 1].replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");
      lastNamesArr.push(lastName);
    }
  });
  console.log(lastNamesArr);
  return lastNamesArr;
}

const inputText =
  "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
getMichaelLastName(inputText);
