const fs = require('fs');

fs.writeFile('data.txt', createRandomText(), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File written');
});

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

function createRandomText() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
    const length = 10; // specify the desired length of the random text

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomText += characters.charAt(randomIndex);
    }

    return randomText;
}
