let total = 0;
let input;
do {
    input = prompt('Введите число или нажмите Отмена');
    if (input == null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    input = Number(input);
    const wrongInput = Number.isNaN(input);
    
    if (wrongInput){
        alert('Введено не число! Попробуйте еще раз.');
        continue;
    }

    total += input;

} while (input !== null);