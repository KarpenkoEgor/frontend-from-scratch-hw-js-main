/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0
let count = 0
let nech = count
while(count < 20){
count += 1
nech = count % 2
if(nech){
  sum += count
  console.log(count, nech, sum)
}

}

