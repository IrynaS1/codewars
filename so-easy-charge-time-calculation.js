/*  Задача
Знаете ли вы, сколько времени требуется для зарядки аккумулятора мобильного телефона с 0 % до 100 %?
	Это зависит от ёмкости аккумулятора вашего мобильного телефона и мощности зарядного устройства.
	Приблизительный расчёт:

0% --> 85%  (fast charge)
(battery capacity(mAh) * 85%) / power of the charger(mA)

85% --> 95% (decreasing charge)
(battery capacity(mAh) * 10%) / (power of the charger(mA) * 50%)

95% --> 100% (trickle charge)
(battery capacity(mAh) * 5%) / (power of the charger(mA) * 20%)
Например, ёмкость вашего аккумулятора составляет 1000 мАч, а вы используете зарядное устройство на 500 мА. 
Чтобы зарядить аккумулятор мобильного телефона с 0 % до 100 %, потребуется время:

0% --> 85%  (fast charge) 1.7 (hour)

85% --> 95% (decreasing charge) 0.4 (hour)

95% --> 100% (trickle charge) 0.5 (hour)

total times = 1.7 + 0.4 + 0.5 = 2.6 (hour)
Полная функция, calculateTimeкоторая принимает два аргумента, batteryиchargerвозвращает,
	за сколько часов можно зарядить аккумулятор с 0 % до 100 %.
	Результатом должно быть число, округленное до 2 знаков после запятой. */


/*	Решение */
function calculateTime(battery, charger) {
	//coding and coding..

	let fastCharge = (battery * 0.85) / charger;
	let decreasingCharge = (battery * 0.10) / (charger * 0.50);
	let trickleCharge = (battery * 0.05) / (charger * 0.20);
	let totalTimes = fastCharge + decreasingCharge + trickleCharge;

	console.log(totalTimes);
}

calculateTime(1000, 500);