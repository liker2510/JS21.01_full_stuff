'use strict';
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const the_week = document.getElementById('the_week'); 
const today = new Date();

const getWeekDays = () => {
    week.forEach((index, text) => {
        let paragraph = document.createElement('p'); 
        if (text === +today.getDay()-1) { 
            paragraph.classList.add('today'); 
            paragraph.innerHTML = week[text]; 
        }
        if (index == 'Суббота' || index == 'Воскресенье') { 
            paragraph.classList.add('italic'); 
            paragraph.innerHTML = week[text]; 
        } else {
            paragraph.innerHTML = week[text]; 
        }
        the_week.append(paragraph);

    });
};
getWeekDays(); 