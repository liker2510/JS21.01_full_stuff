const title = "project_js21";
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
screens = screens.toLowerCase();


console.log(screens.split(", "));
console.log (fullPrice * (rollback/100));