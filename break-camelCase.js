/* Задача

Дополните решение так, чтобы функция разбивала верблюжий регистр, используя пробел между словами.

Пример
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(string) {
  let arr = string.split("");
  arr = arr.map((el) => {
    if (el === el.toUpperCase()) {
      return (el = " " + el);
    } else {
      return el;
    }
  });
  console.log(arr.join(""));
  return arr.join("");
}

solution("camelCasing");
