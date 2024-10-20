/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

let score;  // тестовое значение, можно изменять
let grade = ['F', 'D', 'C', 'B', 'A']
// your code

score = +prompt("Напишите ваш балл");
if(score >= 0 && score <= 49){
    grade = grade[0];
} else if(score >= 50 && score <= 69){
    grade = grade[1];
} else if(score >= 70 && score <= 79){
    grade = grade[2];
} else if(score >= 80 && score <= 89){
    grade = grade[3];
} else if(score >= 90 && score <= 100){
    grade = grade[4];
} else{
    console.log('Введите корректные значения')
}