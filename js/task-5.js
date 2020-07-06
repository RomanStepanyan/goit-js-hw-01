let deliveryCost;
let country = prompt("Введите страну доставки:").toLowerCase();
if (country == null) {
  alert("Отменено пользователем!");
} else {
  switch (country) {
    case "китай":
      deliveryCost = 100;
      country = country[0].toUpperCase() + country.slice(1);
      console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
      break;
    case "чили":
      deliveryCost = 250;
      country = country[0].toUpperCase() + country.slice(1);
      console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
      break;
    case "австралия":
      deliveryCost = 170;
      country = country[0].toUpperCase() + country.slice(1);
      console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
      break;
    case "индия":
      deliveryCost = 80;
      country = country[0].toUpperCase() + country.slice(1);
      console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
      break;
    case "ямайка":
      deliveryCost = 120;
      country = country[0].toUpperCase() + country.slice(1);
      console.log(`Доставка в ${country} будет стоить ${deliveryCost} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
      break;
  }
}


