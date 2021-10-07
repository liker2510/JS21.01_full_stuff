'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 5;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
    title = prompt('Как называется ваш проект?','Сайт услуг');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while(!isNumber(screenPrice))
    
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

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
    let sum = 0;
    let inputValue = 0;

    for (let i = 0; i < 2; i++) {

        if(i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1){
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        const isNumber = function (num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
        }
        
        do {
            inputValue = prompt('Сколько это будет стоить?');
        } while(!isNumber(inputValue))
            
            sum += Number(inputValue);
    }
    
    return sum;
}


function getFullPrice() {
    return screenPrice + allServicePrices;
}


function getTitle() {
    return title.trim().substring(0, 1).toUpperCase() + title.substring(1).toLowerCase();
}

function getServicePercentPrices() {
    return fullPrice - Math.ceil(fullPrice * (rollback / 100));
}
asking();
screenPrice = Number(screenPrice);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

console.log("Стоимость верстки " + screenPrice + " долларов, и стоимость разработки сайта " + fullPrice + " долларов");

