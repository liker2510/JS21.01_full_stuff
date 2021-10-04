'use strict';
let title = "project_js21";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 500;
let rollback = 5;
let fullPrice = 5600000;
let adaptive = true;
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} долларов и Стоимость разработки сайта ${fullPrice} долларов`);
console.log(screens.toLowerCase().split(", "));
console.log (fullPrice * (rollback/100));

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?', '12000');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?', '12000');
fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = (fullPrice - Math.ceil(fullPrice * (rollback/100)));
console.log(servicePercentPrice);

if (fullPrice >= 3000) {
    alert('Даем скидку в 10%');
}else if (fullPrice >= 1500 && fullPrice < 3000) {
    alert('Даем скидку в 5%');
}else if(fullPrice < 1500 && fullPrice >= 0) {
    alert('Скидка не предусмотрена');
}else  if (fullPrice < 0) {
    alert('Что то пошло не так');
}