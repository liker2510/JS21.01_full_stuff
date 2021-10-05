'use strict';

let lang = prompt('Ввдеите ru или en');

if (lang == 'ru') {
    console.log(
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    );
} else if (lang == 'en') {
    console.log(
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    );
}

switch (lang) {
    case 'ru':
        console.log(
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
            'Воскресенье'
        );
        break
    case 'en':
        console.log(
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        );
        break
}

let arr = new Map([
    ['ru', 'Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье'],
    ['en', 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday']
  ]);
console.log(arr.get(`${lang}`));

let namePerson = prompt('Введите имя');
namePerson = (namePerson == 'Артем') ? 'директор' :
    (namePerson == 'Александр') ? 'преподаватель!' :
    'студент';

alert(namePerson);