'use strict';

let argument1 = 25;
let argument2 = "Строока";
let argument3 = "    Строока    ";
let argument4 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aperiam repudiandae harum, explicabo maxime ipsum asperiores exercitationem! Sint ad pariatur nihil eveniet repudiandae facere tempora nesciunt explicabo fugiat, error exercitationem!"

function getArgument(argument) {
    
    if (typeof argument !== 'string') {
        console.log('Введена не строка');
        return;
    }
    argument = argument.trim();
    if (argument.length <= 30) return argument;
    argument = argument.slice(0, 30) + '...';
    return argument;
  }
  console.log(getArgument(argument1));
  console.log(getArgument(argument2));
  console.log(getArgument(argument3));
  console.log(getArgument(argument4));
