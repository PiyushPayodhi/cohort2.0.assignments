const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

setTimeout(() => {
    console.log('Timeout');
}, 1000);

let sum = 0;
for (let i = 0; i < 10000000000; i++) {
    sum += i;
}
console.log(sum);