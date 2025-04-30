/* Задача

Чередующийся регистр <=> Чередующийся регистр
Определите String.prototype.toAlternatingCase 
(или аналогичную функцию/метод например, to_alternating_case/toAlternatingCase/ToAlternatingCase
 на выбранном вами языке; см. исходное решение для получения подробной информации) 
 таким образом, чтобы каждая строчная буква становилась заглавной, 
 а каждая заглавная буква становилась строчной. Например:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

*/

String.prototype.toAlternatingCase = function () {
  let arr = this.split("");
  arr = arr.map((el) => {
    return el.toUpperCase() === el ? el.toLocaleLowerCase() : el.toUpperCase();
  });
  console.log(arr.join(""));
  return arr.join("");
};

"HeLLo WoRLD".toAlternatingCase();
