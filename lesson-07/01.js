/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
let string = str.split(" ")
for (let i = 0; i < string.length; i++) {
  string[i] = string[i][0].toUpperCase()+ string[i].slice(1)
  
}
return string.join(" ")
}




console.log(capitalizeWords("hello world from javascript"));
