/* Задача
Напишите программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

Если в имени ровно 4 буквы, вы можете быть уверены, что это ваш друг! 
В противном случае вы можете быть уверены, что это не...

Input = {"Ryan", "Kieran", "Jason", "Yous"}
Output = {"Ryan", "Yous"}

Input = {"Peter", "Stephen", "Joe"}
Output = {}
Строки ввода будут содержать только буквы. Примечание: сохраняйте исходный порядок имён в выводе.

*/

function friend(friends) {
	let myFriends = [];
	friends.forEach(friend => {
		if (friend.split('').length === 4) {
			return myFriends.push(friend);
		}
	});
	console.log(myFriends);
	return myFriends;
}

friend(["Ryan", "Kieran", "Mark"]);