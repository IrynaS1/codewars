/* Задача

Мужские гаметы, или сперматозоиды, у людей и других млекопитающих являются гетерогаметными 
и содержат один из двух типов половых хромосом. Это либо X, либо Y. Женские гаметы, 
или яйцеклетки, содержат только Х-хромосому и являются гомогаметными.

В этом случае пол особи определяется сперматозоидом. Если сперматозоид, содержащий 
Х-хромосому, оплодотворяет яйцеклетку, то полученная зигота будет XX, то есть женского пола. 
Если сперматозоид содержит Y-хромосому, то полученная зигота будет XY, то есть мужского пола.

Определите, будет ли пол потомства мужским или женским, на основании наличия в сперматозоидах 
мужчины Х- или Y-хромосомы.

Если сперматозоид содержит Х-хромосому, верните сообщение "Congratulations! You're going to have a daughter.". 
Если сперматозоид содержит Y-хромосому, верните сообщение "Congratulations! You're going to have a son.".

*/

function chromosomeCheck(sperm) {
  let arr = sperm.split("");
  const congrats = arr.some((el) => el === "Y");
  console.log(
    congrats
      ? "Congratulations! You're going to have a son."
      : "Congratulations! You're going to have a daughter."
  );
  return congrats
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

chromosomeCheck("XX");
