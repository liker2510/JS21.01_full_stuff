let num = 266219;
let splitNum = num.toString().split('');
let convertNum = splitNum.map(Number);
console.log(convertNum);

let result = convertNum.reduce((acc, rec) => acc * rec);
console.log(result);

let degree = result ** 3;
console.log(String(degree).slice(0,2));

