/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = 1; 
let dice2 = 1;
let isWinningDouble = false; // your code
const keyWordsOne = ["1", "2", "3", "4", "5", "6"];
const keyWordsTwo = ["1", "2", "3", "4", "5", "6"];

while(!isWinningDouble){
  const randomOne = Math.floor(Math.random(1) * 6);
  const randomTwo = Math.floor(Math.random(1) * 6);
  dice1 = keyWordsOne[randomOne];
  console.log('Первый бросок: ' + dice1);
  dice2 = keyWordsTwo[randomTwo];
  console.log('ПЕРВЫЙ бросок: ' + dice2);
  alert(dice1);
  alert(dice2) 
if((dice1 === keyWordsOne[3] && dice2 === keyWordsTwo[3])||
(dice1 === keyWordsOne[4] && dice2 === keyWordsTwo[4])||
(dice1 === keyWordsOne[5] && dice2 === keyWordsTwo[5])||
(dice1 === keyWordsOne[6] && dice2 === keyWordsTwo[6]))
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
