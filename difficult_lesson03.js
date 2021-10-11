'use strict';

let lang = prompt('Ввдеите "ru" или "en"');
let weekRu = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота,В оскресенье";
let weekEn = " Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";


if (lang == 'ru') {
    console.log(weekRu);
} else if (lang == 'en') {
    console.log(weekEn);
} else {
    alert('Вы не ввели "ru" или "en"');
}

switch (lang) {
    case 'ru':
        console.log(weekRu);
        break
    case 'en':
        console.log(weekEn);
        break
    default:
        alert( 'Вы не ввели "ru" или "en"' );
}

let arr = new Map([
    ['ru', weekRu],
    ['en', weekEn]
  ]);
console.log(arr.get(`${lang}`));

let namePerson = prompt('Введите имя');
namePerson = (namePerson == 'Артем') ? 'директор' :
    (namePerson == 'Александр') ? 'преподаватель!' :
    'студент';

alert(namePerson);