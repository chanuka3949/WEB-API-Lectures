const logger = require("./log");
const http = require("http");
const path = require('path');
const upperCase = require('upper-case');
// import { upperCase, localeUpperCase } from "upper-case";


console.log(upperCase.upperCase("my name is chanuka"));
// logger.errorMessage("Tada");
// logger.warningMessage("Tada");
// console.log(logger.myName);
// logger.logWarningMessage("HDHSDH");

// const server = http.createServer();
// server.listen(3000);

// server.on('connection', (socket) => {
//     console.log("Connected...", con);
// })

// const fileLocation = "D://person.json";

// http
//   .createServer((req, res) => {
//     if (req.url === "/") {
//       res.write("Hello World");
//       res.end();
//     }
//       else if (req.url === '/cats'){
//           res.write(JSON.stringify({persian:"cat",someothercar:"cat"}));
//           res.end();
//     } else {
//       res.write("Something Else");
//       res.end();
//     }
//   })
//   .listen(3000);


// console.log(path.dirname(fileLocation));
// console.log(path.extname(fileLocation));
// console.log(path.parse(fileLocation));

