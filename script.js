'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 5,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function() {
        appData.title = prompt('Как называется ваш проект?','Сайт услуг');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while(!appData.isNumber(appData.screenPrice))
        
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    getRollbackMessage: function(price) {
        if (price >= 3000) {
            return('Даем скидку в 10%');
        }else if (price >= 1500 && price < 3000) {
            return('Даем скидку в 5%');
        }else if(price < 1500 && price >= 0) {
            return('Скидка не предусмотрена');
        }else  if (price < 0) {
            return('Что то пошло не так');
        }
    },
    getAllServicePrices: function () {
        let sum = 0;
        let inputValue = 0;
    
        for (let i = 0; i < 2; i++) {
    
            if(i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1){
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }         
            do {
                inputValue = prompt('Сколько это будет стоить?');
            } while(!appData.isNumber(inputValue))
                
                sum += Number(inputValue);
        }
        
        return sum;
    },
    getFullPrice: function() {
        return appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function() {
        return appData.title.trim().substring(0, 1).toUpperCase() + appData.title.substring(1).toLowerCase();
    },
    getServicePercentPrices: function() {
        return appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));
    }, 
    start: function() {
        this.asking();
        appData.screenPrice = Number(appData.screenPrice);
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },
    logger: function() {
        for(let key in appData) {
            console.log(appData[key]);
        }
    },
    
}

appData.start();