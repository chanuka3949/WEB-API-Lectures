var logger = (req, res, next) => {
    let logMessage = "Method: " + req.method + "|" + "Timestamp: " + new Date();
    requestLog.push(logMessage);
    console.log(logMessage);
    next();
}

const requestLog = [];

module.exports = logger;