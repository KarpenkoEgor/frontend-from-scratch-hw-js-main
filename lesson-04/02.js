/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


let arrayNew = [1,2,3,5,2,2,4]
function findUniqueElements(array) {
    let fdf = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] === arrayNew[i]){
            arrayNew = arrayS
            fdf.push(arrayNew[i])
            
        }
    }return fdf
    } console.log(findUniqueElements(arrayNew));


// const fdf = includesElement([1, 2, 3])
// console.log(findUniqueElements(arrayNew))