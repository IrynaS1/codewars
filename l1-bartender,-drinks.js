/* Задача
Напишите функцию, которая принимает на вход строку и
 выводит результаты в соответствии со следующей таблицей:

Ввод	Вывод
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
любое другое значение Примечание: — это значение по умолчанию: если на 
вход функции не поступает ни одно из значений из таблицы, то 
возвращаемое значение должно быть "Beer".

Убедитесь, что вы учитываете случаи, когда некоторые слова отображаются 
без правильной прописной буквы. 
Например, ввод "pOLitiCIaN" по-прежнему должен возвращать "Your tax dollars".

*/


function getDrinkByProfession(param) {

	switch (param.toLowerCase()) {
		case "jabroni":
			console.log("Patron Tequila");
			return "Patron Tequila";
		case "school counselor":
			console.log("Anything with Alcohol");
			return "Anything with Alcohol";
		case "programmer":
			console.log("Hipster Craft Beer");
			return "Hipster Craft Beer";
		case "bike gang member":
			console.log("Moonshine");
			return "Moonshine";
		case "politician":
			console.log("Your tax dollars");
			return "Your tax dollars";
		case "rapper":
			console.log("Cristal");
			return "Cristal";
		default:
			console.log("Beer");
			return "Beer";
	}
}

getDrinkByProfession("jabrOni");
