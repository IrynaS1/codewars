/* Задача
Определите метод, hello который returns "Привет, имя!" для данного name или говорит "Привет, мир!" если имя не указано (или передается как пустая строка).

Предположим, что name — это String и он проверяет наличие опечаток в имени пользователя, чтобы вернуть имя с первой заглавной буквы (Xxxx).

Примеры:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

function hello(name) {
	if (name !== '' && name !== undefined) {
		let subString = name.slice(1).toLowerCase();
		let firstLetter = name.charAt(0).toUpperCase();
		console.log(`Hello, ${firstLetter + subString}!`);
		return `Hello, ${firstLetter + subString}!`;
	} else {
		console.log('Hello, World!');
		return 'Hello, World!';
	}
}

hello('alice');