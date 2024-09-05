const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const filename = process.env.FILENAME;

if(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if(err) {
            console.error('Ошибка чтения файла:', err);
            return;
        }
        console.log(data)
    });
} else {
    console.error('Переменная окружения FILENAME не найдена')
}
