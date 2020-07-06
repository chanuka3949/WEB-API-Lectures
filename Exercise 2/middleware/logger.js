var logger = (req, res, next) => {
    requestLog.push("Method: " + req.method + "|" + "Timestamp: " + new Date());
    console.log(requestLog);
    next();
}

const requestLog = [];

module.exports = logger;