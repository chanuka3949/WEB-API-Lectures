var log = {
    "logWarningMessage" : function (message) {
        console.log("Warning : " + message);
    },
    "logErrorMessage" : function (message) {
        console.log("Error : " + message);
    }
}

module.exports = log;
// module.exports = {"Prop1":logWarningMessage,logErrorMessage};

// module.exports.warningMessage = logWarningMessage;
// module.exports.errorMessage = logErrorMessage;
// module.exports.myName = 'Chanuka';
