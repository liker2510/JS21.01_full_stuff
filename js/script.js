'use strict';
const header = document.getElementsByTagName('h1')[0];
const plusBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber  = document.querySelectorAll('.other-items.number');

const rangeValue = document.querySelector('div.rollback > div.main-controls__range > .range-value');
const inputType = document.querySelector("div.rollback input[type=range]");

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];


const layoutCost = document.getElementsByClassName('total-input')[0];
const numberOfScreens = document.getElementsByClassName('total-input')[1];
const additionalCostServices = document.getElementsByClassName('total-input')[2];
const theTotalCost = document.getElementsByClassName('total-input')[3];
const CostIncludingRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');
const select = document.querySelectorAll('.select');
const input = document.querySelectorAll('.input');

const allInputs = [...select, ...input ];

console.log(allInputs);

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    numCount: 0,
    isError: false,
    checkInputs: function() {

        allInputs.forEach(input => {
            if(input.value === '') {
                appData.isError = true;
            }
        })

        if(!appData.isError) {
            appData.start();
        }
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    start: function() {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
    //     appData.logger();
        console.log(appData);
        appData.showResult();
    },
    showResult: function() {
        layoutCost.value = appData.screenPrice;
        additionalCostServices.value = appData.servicePricesPercent + appData.servicePricesNumber;
        theTotalCost.value = appData.fullPrice;
        CostIncludingRollback.value = appData.servicePercentPrice;
        numberOfScreens.value = appData.numCount;
    },
    init: function() {
        appData.addTitle()
        appData.addSlider();
        startBtn.addEventListener('click', (event) => {
            event.preventDefault();
            appData.isError = false;
            appData.checkInputs();
        });
        plusBtn.addEventListener('click', appData.addScreenBlock);
    },
    addTitle: function() {
        document.title = title.textContent;
    },
    addScreens: function() {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value,
            })
        })
        console.log( appData.screens);
    },
    addSlider: function() {
        const getRollbackValue = function(event) {
            rangeValue.textContent = event.target.value + '%';
            appData.rollback = +event.target.value;
            console.log(appData.rollback);
            appData.servicePercentPrice = appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));
            CostIncludingRollback.value = appData.servicePercentPrice;

        }
        inputType.addEventListener('input', getRollbackValue);
        inputType.addEventListener('change', getRollbackValue);      
        
    },
    addServices: function() {
        otherItemsPercent.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            console.log(check);
            console.log(label);
            console.log(input);
            if(check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        })

        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            console.log(check);
            console.log(label);
            console.log(input);
            if(check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        })
    },
    addScreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function() {
        for(let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }  

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }
        for (let numberCount of appData.screens) {
            appData.numCount += numberCount.count;
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
        appData.servicePercentPrice = appData.fullPrice - Math.ceil(appData.fullPrice * (appData.rollback / 100));
    },
    logger: function() {
        // for(let key in appData) {
        //     console.log(appData[key]);
        // }
        // console.log(appData.screenPrice);
    },
    
}

appData.init();