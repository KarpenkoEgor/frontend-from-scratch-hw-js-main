/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/
// let array = [1, 2, 3]


function includesElement(array, element) {
    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            return true
        }
    
}return false
}
console.log(includesElement([1, 2, 3], 3))

let array = [1, 2, 3]

// function includesElement(array, element){
//     for(let i = 0; i < array.length; i++){
//         if(array.includes(element)){
//             const getTrue = array.includes(element)
//             return getTrue
//         }
// }return false
// return array.includes(element)
// }

// console.log(includesElement((array), 1))



// function sum(a, b){
//     const x = 5
//     const hjh = a + x
//     return hjh
// }
// console.log(sum(1, 2));
