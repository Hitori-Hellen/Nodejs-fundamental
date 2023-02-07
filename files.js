const fs = require('fs');

// read file
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');
// write file
// fs.writeFile('./docs/blog2.txt', 'Hello again', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('done writing');
// });
// directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) =>{
//         console.log(err);
//     });
// }
// else{
//     fs.rmdir('./assets', () => {
//         console.log('deleted');
//     });
// }
// delete file
if (fs.existsSync('./docs/blog2.txt')){
    fs.unlink('./docs/blog2.txt', (err) => {
        if (err){
            console.log(err);
        }
        console.log('deleted');
    })
}