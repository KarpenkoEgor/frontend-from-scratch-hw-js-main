/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

let score;  // тестовое значение, можно изменять
let grade = ['A', 'B', 'C', 'D', 'F']
// your code

score = +prompt("Напишите ваш балл");
if(score >= 0 && score <= 49){
    console.log(`Ваша оценка: ${grade[4]}`);
    alert(`Ваша оценка: ${grade[4]}`)
} else if(score >= 50 && score <= 69){
    console.log(`Ваша оценка: ${grade[3]}`);
    alert(`Ваша оценка: ${grade[3]}`)
} else if(score >= 70 && score <= 79){
    console.log(`Ваша оценка: ${grade[2]}`);
    alert(`Ваша оценка: ${grade[2]}`)
} else if(score >= 80 && score <= 89){
    console.log(`Ваша оценка: ${grade[1]}`);
    alert(`Ваша оценка: ${grade[1]}`)
} else if(score >= 90 && score <= 100){
    console.log(`Ваша оценка: ${grade[0]}`);
    alert(`Ваша оценка: ${grade[0]}`)
} else{
    console.log('Введите корректные значения')
    alert(`Введите корректное значение`)
}