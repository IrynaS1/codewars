/* Задача 

Если месяц задан целым числом от 1 до 12, верните, 
к какому кварталу года он относится, в виде целого числа.

Например: 2-й месяц (февраль) входит в первый квартал; 
6-й месяц (июнь) входит во второй квартал; 
11-й месяц (ноябрь) входит в четвёртый квартал.

Ограничение:

1 <= month <= 12
*/


const quarterOf = (month) => {
	const quarters = [
		{
			number: 1,
			months: [1, 2, 3]
		},
		{
			number: 2,
			months: [4, 5, 6]
		},
		{
			number: 3,
			months: [7, 8, 9]
		},
		{
			number: 4,
			months: [10, 11, 12]
		}
	];
	let num;
	quarters.forEach((quarter) => {
		if (quarter.months.includes(month) === true) {
			num = quarter.number;
			return num;
		}
	});
	console.log('квартал - ', num);
	return num;
}

quarterOf(8);