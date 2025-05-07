/* Задача

Замените все гласные на восклицательные знаки в предложении. aeiouAEIOU — это гласная.

Примеры
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"

*/

function replace(s) {
  let arr = s.split("");
  const vowel = ["a", "e", "i", "o", "u"];
  arr = arr.map((el) => {
    return vowel.includes(el.toLowerCase()) ? "!" : el;
  });
  console.log(arr.join(""));
  return arr.join("");
}

replace("!Hi! Hi!");
