var enrollAPI = {};

enrollAPI.concate = function() {
    var concatedString = "";
    for (var i = 0; i < arguments.length; i++) {
        concatedString += arguments[i];
    }
    return concatedString;
};

module.exports = enrollAPI;
