/* Задача

Напишите функцию, которая принимает в качестве параметров 
целое число n и строку s и возвращает строку s с n повторениями.

Примеры (ввод -> вывод)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/


function repeatStr(n, s) {
	let b = s.repeat(n);
	console.log(b);
	return b;
 }

repeatStr(8, "Hello");