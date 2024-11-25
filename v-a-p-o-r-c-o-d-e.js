/* Задача
Напишите функцию, которая преобразует любое предложение в предложение V A P O R W A V E. 
Предложение V A P O R W A V E преобразует все буквы в заглавные и добавляет 
2 пробела между каждой буквой (или специальным символом), чтобы создать эффект V A P O R W A V E.

Обратите внимание, что пробелы в этом случае следует игнорировать.

Примеры
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"

*/

function vaporcode(string) {
	let arr = [];
	string.split('').map(el => {
		if (el !== ' ') {
			el = el.toUpperCase() + ' ' + ' ';
			return arr.push(el);
		}
	});

	string = arr.join('').trim();
	console.log(string);
	return string;
}

vaporcode("Lets go to the movies");
