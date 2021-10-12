'use strict';
const header = document.getElementsByTagName('h1')[0];
const handlerBtn = document.getElementsByClassName('handler_btn');
const screenBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber  = document.querySelectorAll('.other-items.number');
const rangeValue = document.querySelector('div.rollback > div.main-controls__range > .range-value');
const inputType = document.querySelector("div.rollback input[type=range]");
const layoutCost = document.getElementsByClassName('total-input')[0];
const numberOfScreens = document.getElementsByClassName('total-input')[1];
const additionalCostServices = document.getElementsByClassName('total-input')[2];
const theTotalCost = document.getElementsByClassName('total-input')[3];
const CostIncludingRollback = document.getElementsByClassName('total-input')[4];
let screen = document.querySelectorAll('.screen');
;

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 5,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function() {
        do {
            appData.title = prompt('Как называется ваш проект?','Сайт услуг');
        } while(appData.isNumber(appData.title))
        

        for (let i = 0; i < 2; i++) {
            
            let name;
            do {
                name = prompt('Какие типы экранов нужно разработать?');
            } while(appData.isNumber(name))
            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while(!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price });
        }

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какой дополнительный тип услуги нужен?'); 
            } while(appData.isNumber(name))
            let price = 0;
        
            do {
                price = prompt('Сколько это будет стоить?');
            } while(!appData.isNumber(price))
                
            appData.services[name] = +price;
        }
        
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function() {
        appData.screens.reduce(function(a, b) {
            return appData.screenPrice = +a.price + +b.price;
          });
          

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }

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
    getFullPrice: function() {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function() {
        appData.title = appData.title.trim().substring(0, 1).toUpperCase() + appData.title.substring(1).toLowerCase();
    },
    getServicePercentPrices: function() {
        appData.servicePercentPrice = appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));
    }, 
    start: function() {
        this.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    logger: function() {
        // for(let key in appData) {
        //     console.log(appData[key]);
        // }
        console.log(appData.screenPrice);
    },
    
}

appData.start();