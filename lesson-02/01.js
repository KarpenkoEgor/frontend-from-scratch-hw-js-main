/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess = false
let user
while(!isAccess){
    if( (user === isAdmin || user === isVerifiedUser ) && 
    (user === hasSpecialPermission  || user === hasTemporaryPass ) );
    {
        isAccess = true
    alert("Вы имеете доступ!")
    } 
    }
// your code
