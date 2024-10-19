/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 
let dice2 
let isWinningDouble = false;
 // your code

while(!isWinningDouble){ 
  dice1 = Math.ceil(Math.random() * 6);
  dice2 = Math.ceil(Math.random() * 6);
  console.log('Первый бросок: ' + dice1);
  console.log('Первый бросок: ' + dice2); 
if((dice1 === 3 && dice2 === 3)||
(dice1 === 4 && dice2 === 4)||
(dice1 === 5 && dice2 === 5)||
(dice1 === 6 && dice2 === 6))
{
  isWinningDouble = true;
  alert('Выигрышный дубль!');
  console.log('Выигрышный дубль!');
} else {
  console.log('Не выигрышный дубль.')
}

//  
} 

/*
console.log('Первый бросок: ' + dice1)
console.log('Первый бросок: ' + dice1)
if (isWinningDouble) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
// }
*/
