/* Задача

В этом простом упражнении вы создадите программу, которая будет принимать два списка целых чисел, a и b. 
Каждый список будет состоять из 3 положительных целых чисел больше 0, представляющих размеры параллелепипедов 
a и b. Вы должны найти разницу в объёмах параллелепипедов, независимо от того, какой из них больше.

Например, если переданные параметры — ([2, 2, 3], [5, 4, 1]), то объём a равен 12, а объём b равен 20. 
Следовательно, функция должна вернуть 8.

Ваша функция будет протестирована на готовых примерах, а также на случайных.

Если вы можете, попробуйте написать это в одной строке кода.

*/

function findDifference(a, b) {
  console.log(
    a.reduce((m, n) => {
      return m * n;
    }) -
      b.reduce((m, n) => {
        return m * n;
      }) >=
      0
      ? a.reduce((m, n) => {
          return m * n;
        }) -
          b.reduce((m, n) => {
            return m * n;
          })
      : -1 *
          (a.reduce((m, n) => {
            return m * n;
          }) -
            b.reduce((m, n) => {
              return m * n;
            }))
  );

  return a.reduce((m, n) => {
    return m * n;
  }) -
    b.reduce((m, n) => {
      return m * n;
    }) >=
    0
    ? a.reduce((m, n) => {
        return m * n;
      }) -
        b.reduce((m, n) => {
          return m * n;
        })
    : -1 *
        (a.reduce((m, n) => {
          return m * n;
        }) -
          b.reduce((m, n) => {
            return m * n;
          }));
}

findDifference([13, 4, 2], [29, 11, 25]);
