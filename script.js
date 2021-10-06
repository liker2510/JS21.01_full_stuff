'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?', '12000');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?', '12000');
let rollback = 5;

let fullPrice, servicePercentPrice, allServicePrices;

const showTypeof = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
    if (price >= 3000) {
        return('Даем скидку в 10%');
    }else if (price >= 1500 && price < 3000) {
        return('Даем скидку в 5%');
    }else if(price < 1500 && price >= 0) {
        return('Скидка не предусмотрена');
    }else  if (price < 0) {
        return('Что то пошло не так');
    }
}

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
}
allServicePrices = getAllServicePrices()

function getFullPrice() {
    return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();

function getTitle() {
    return title && title[0].substring(0, 1).toUpperCase() + title.substring(1).toLowerCase();
}
function getServicePercentPrices() {
    return (fullPrice - Math.ceil(fullPrice * (rollback/100)));
}
servicePercentPrice = getServicePercentPrices();


showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);







