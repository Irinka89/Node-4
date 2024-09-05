const moment = require('moment');

const now = moment();

const format1 = now.format('DD-MM-YYYY');
const format2 = now.format('MMM Do YY');
const format3 = now.format('dddd');

console.log('Текущая дата в формате DD-MM-YYYY:', format1);
console.log('Текущая дата в формате MMM Do YY:', format2);
console.log('Текущий день недели:', format3);