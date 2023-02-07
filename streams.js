const fs  = require('fs');

const readStream = fs.createReadStream('./docs/billionaire_list_20yrs.txt');
const writeStream = fs.createWriteStream('./docs/blog3.txt')
// readStream.on('data', (chunk) => {
//     console.log('--------------------------------');
//     console.log(chunk.toString());
//     writeStream.write(chunk.toString());
//     writeStream.write('\n')
// });
// another way to create readStream
// const readStream = fs.createReadStream('./docs/billionaire_list_20yrs.txt', { encoding: 'utf8'});

// piping
readStream.pipe(writeStream);