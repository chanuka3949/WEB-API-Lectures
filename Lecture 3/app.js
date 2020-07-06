const http = require('http');
const path = require('path');
const fs = require('fs');

const dateTime =  require('./custom-date-time');

http.createServer((req, res) => {
    if (req.url === '/home'){
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Welcome</h1>");
        res.write("<p>This page contains content related to the 'Home' page of the web application</p>");
        res.write('Current Time : ' + dateTime.DateTime());
        res.end();
    }
    else if (req.url === '/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>About</h1>");
        res.write("<p>This page contains content related to the 'About' page of the web application</p>");
        res.end();
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
}).listen(3000);