/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

let factorial = 3628800;
let count = 1;
let proizv = 1;

while(count < 10){
  count = count + 1
  proizv = proizv * count 
console.log(proizv, count)
}
// your code
