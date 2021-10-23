'use strict';
const header = document.getElementsByTagName('h1')[0];
const plusBtn = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const rangeValue = document.querySelector('div.rollback > div.main-controls__range > .range-value');
const inputType = document.querySelector("div.rollback input[type=range]");

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];


const layoutCost = document.getElementsByClassName('total-input')[0];
const numberOfScreens = document.getElementsByClassName('total-input')[1];
const additionalCostServices = document.getElementsByClassName('total-input')[2];
const theTotalCost = document.getElementsByClassName('total-input')[3];
const сostIncludingRollback = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');
let select = document.querySelectorAll('.select');
let input = document.querySelectorAll('.input');
let cmsOpen = document.querySelector('#cms-open');
let hiddenCmsVariants = document.querySelector('.hidden-cms-variants');
let mainControlsInput = document.querySelector('.hidden-cms-variants > .main-controls__input');
let cmsSelect = document.querySelectorAll('#cms-select > option');
//  console.log(mainControlsInput);
//  console.log(cmsSelect);

 cmsSelect.forEach((index) => {
    if(index.value === 'other' ) {
        mainControlsInput.style.display = "flex";
    } else {
        mainControlsInput.style.display = "none";
    }
 })

cmsOpen.addEventListener('click', () => {
    if (cmsOpen.checked === true) {
        hiddenCmsVariants.style.display = "flex";
    }else {
        hiddenCmsVariants.style.display = "none";
    }
})

const allInputs = [...select, ...input];


let appData = {
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
    checkInputs: function () {
        let select = document.querySelectorAll('.select');
        let input = document.querySelectorAll('.input');
        const allInputs = [...select, ...input];
        allInputs.forEach(input => {
            if (input.value === '') {
                this.isError = true;
            }
        })

        if (!this.isError) {
            this.start();
            this.isError = false;
        }
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    start: function () {
        this.addScreens();
        this.addServices();
        this.addPrices();
        //     appData.logger();
        // console.log(this);
        this.showResult();
        startBtn.style.display = 'none';
        resetBtn.style.display = 'block';
        plusBtn.setAttribute("disabled", "disabled");
        let select = document.querySelectorAll('.select');
        let input = document.querySelectorAll('.input');
        const allInputs = [...select, ...input];
        allInputs.forEach((index,) => {
            index.setAttribute("disabled", "disabled");
        })

        otherItemsPercent.forEach((item) => {
            const check = item.querySelectorAll('input[type=checkbox]');
            check.forEach((index,) => {
                index.setAttribute("disabled", "disabled");
            })
        })
        otherItemsNumber.forEach((item) => {
            const check = item.querySelectorAll('input[type=checkbox]');
            check.forEach((index,) => {
                index.setAttribute("disabled", "disabled");
            })
        })
        cmsOpen.setAttribute("disabled", "disabled");
    },
    showResult: function () {
        layoutCost.value = this.screenPrice;
        additionalCostServices.value = this.servicePricesPercent + this.servicePricesNumber;
        theTotalCost.value = this.fullPrice;
        сostIncludingRollback.value = this.servicePercentPrice;
        numberOfScreens.value = this.numCount;
    },
    init: function () {
        this.addTitle()
        this.addSlider();
        startBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this.isError = false;
            this.checkInputs();
            this.reset()
        });
        plusBtn.addEventListener('click', this.addScreenBlock);

    },
    reset: function () {
        resetBtn.addEventListener('click', (event) => {
            event.preventDefault();
            appData.fullPrice = 0;
            appData.screenPrice = 0;
            appData.servicePricesPercent = 0;
            appData.servicePricesNumber = 0;
            appData.servicePercentPrice = 0;
            appData.numCount = 0;
            appData.screens = [];
            
            let select = document.querySelectorAll('.select');
            let input = document.querySelectorAll('.input');
            const allInputs = [...select];
            allInputs.forEach((index) => {
                index.value = '';
                index.removeAttribute("disabled");
                for (let i = 1; i < allInputs.length; i++) {
                    allInputs[i].parentNode.parentElement.remove();
                  }
            })
            const allInput = [...input];
            allInput.forEach((index) => {
                index.value = '';
                index.removeAttribute("disabled");
                for (let i = 1; i < allInput.length; i++) {
                    allInput[i].parentNode.parentElement.remove();
                  }
            })

            otherItemsPercent.forEach((item) => {
                const check = item.querySelectorAll('input[type=checkbox]');
                check.forEach((index) => {
                    index.value = '';
                    index.checked = false;
                    index.removeAttribute("disabled");
                })
            })
            otherItemsNumber.forEach((item) => {
                const check = item.querySelectorAll('input[type=checkbox]');
                check.forEach((index,) => {
                    index.value = '';
                    index.checked = false;
                    index.removeAttribute("disabled");
                })
            })

            inputType.value = 0;
            rangeValue.textContent = inputType.value + '%';
            appData.showResult();

            screens = document.querySelectorAll('.screen');
            screens.forEach((screen, index) => {
                const select = screen.querySelector('select');
                const input = screen.querySelector('input');
                const selectName = select.options[select.selectedIndex].textContent;
    
                this.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                    count: +input.value,
                })
            })

            plusBtn.removeAttribute("disabled");
            plusBtn.addEventListener('click', appData.addScreenBlock);

            resetBtn.style.display = 'none'
            startBtn.style.display = 'block'
        }) 
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value,
            })
        })
        // console.log(this.screens);
    },
    addSlider: function () {
        const getRollbackValue = (event) => {
            rangeValue.textContent = event.target.value + '%';
            this.rollback = +event.target.value;
            this.servicePercentPrice = this.fullPrice - Math.ceil(this.fullPrice * (this.rollback / 100));
            сostIncludingRollback.value = this.servicePercentPrice;
        }
        inputType.addEventListener('input', getRollbackValue);
        inputType.addEventListener('change', getRollbackValue);

    },
    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            // console.log(check);
            // console.log(label);
            // console.log(input);
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        })

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            // console.log(check);
            // console.log(label);
            // console.log(input);
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }
        for (let numberCount of this.screens) {
            this.numCount += numberCount.count;
        }
        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = this.fullPrice - Math.ceil(this.fullPrice * (this.rollback / 100));
    },
    logger: function () {
        // for(let key in appData) {
        //     console.log(appData[key]);
        // }
        // console.log(appData.screenPrice);
    },

}

appData.init();
