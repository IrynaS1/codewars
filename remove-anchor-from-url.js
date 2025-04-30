/* Задача

Дополните функцию/метод так, чтобы он возвращал URL-адрес без всего, что находится после якоря (#).

Примеры
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

function removeUrlAnchor(url) {
  url = url.split("#");
  console.log(url[0]);
  return url[0];
}

removeUrlAnchor("www.codewars.com#about");
