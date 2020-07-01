let total = 0;
let input;

while('GO'<'IT'){
    input = prompt('Введите число или нажмите Отмена');
    if (input == null) {
        alert('Отменено пользователем!');
        break;
    }
    input = Number(input);
    const wrongInput = Number.isNaN(input);
    
    if (wrongInput){
        alert('Введено не число! Попробуйте еще раз.');
        continue;
    }

    total += input;
}
alert(`Общая сумма чисел равна ${total}`)
