const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const askPassword = prompt('Введите пароль:');
if (askPassword === null) {
    message = 'Отменено пользователем!';
}
else if (askPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}
else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
