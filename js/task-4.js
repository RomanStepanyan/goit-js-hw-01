const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const order = prompt('Сколько дроидов вы хотите заказать?:');
if (order == null) {
    alert('Отменено пользователем!');
}
else {
    totalPrice = Number(order) * pricePerDroid;
    alert(credits >= totalPrice ? `Вы купили ${order} дроидов, на счету осталось ${credits - totalPrice} кредитов.` : 'Недостаточно средств на счету!');
}