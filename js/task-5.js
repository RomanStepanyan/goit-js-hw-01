let deliveryCost;
let country = prompt('Введите страну доставки:');
if (country == null) {
    alert('Отменено пользователем!');
}
else{
    switch (country.toLowerCase()) {
        case 'китай' :
        deliveryCost = 100;
        break;
        case  'чили' :
        deliveryCost = 250;
        break;
        case 'австралия' :
        deliveryCost = 170;
        break;
        case 'индия' :
        deliveryCost = 80;
        break;
        case 'ямайка' :
        deliveryCost = 120;
        break;    
    
    default: alert('В вашей стране доставка не доступна');
    break;
}

country = country.charAt(0).toUpperCase() + country.substr(1);
console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);

}

