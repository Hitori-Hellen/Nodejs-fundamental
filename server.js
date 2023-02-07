const fs = require('fs');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    const rd = _.random(0, 20);
    console.log(rd);

    const greet = _.once(() => {
        console.log('Hello');
    });

    greet();
    greet();
    // response
    // res.setHeader('Content-type', 'text/plain');
    // res.write('Hello ninjas');

    // res.setHeader('Content-type', 'text/html');
    // res.write('<p>Hello again ninjas</p>');
    // res.end();
    
    // response html file
    res.setHeader('Content-type', 'text/html');

    let path = './views';
    switch (req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    });
});

server.listen(3000, 'localhost', () =>{
    console.log('Listening for request'); 
});